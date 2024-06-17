import {StyledComponentProps} from '@mui/material';

interface OverridableTypeMap {
  props: {};
  defaultComponent: React.ElementType;
}

interface CommonProps extends StyledComponentProps<never> {
  className?: string;
  style?: React.CSSProperties;
}

type BaseProps<M extends OverridableTypeMap> = M['props'] & CommonProps;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type DistributiveOmit<T, K extends keyof any> = T extends any
  ? Omit<T, K>
  : never;

type OverrideProps<
  M extends OverridableTypeMap,
  C extends React.ElementType,
> = BaseProps<M> &
  DistributiveOmit<React.ComponentPropsWithRef<C>, keyof BaseProps<M>>;

type DefaultComponentProps<M extends OverridableTypeMap> = BaseProps<M> &
  DistributiveOmit<
    React.ComponentPropsWithRef<M['defaultComponent']>,
    keyof BaseProps<M>
  >;

/**
 * A component whose root component can be controlled via a `component` prop.
 *
 * Adjusts valid props based on the type of `component`.
 */
export interface OverridableComponent<M extends OverridableTypeMap> {
  // If you make any changes to this interface, please make sure to update the
  // `OverridableComponent` type in `mui-types/index.d.ts` as well.
  // Also, there are types in MUI Base that have a similar shape to this interface
  // (e.g. SelectUnstyledType, OptionUnstyledType, etc.).
  <C extends React.ElementType>(
    props: {
      /**
       * The component used for the root node.
       * Either a string to use a HTML element or a component.
       */
      component: C;
    } & OverrideProps<M, C>
  ): JSX.Element | null;
  (props: DefaultComponentProps<M>): JSX.Element | null;
}

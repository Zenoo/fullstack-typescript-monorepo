
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions

export type PrismaPromise<T> = $Public.PrismaPromise<T>


export type AddressPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Address"
  objects: {
    person: PersonPayload<ExtArgs> | null
  }
  scalars: $Extensions.GetResult<{
    id: number
    streetNumber: string
    street: string
    zip: string
    city: string
    country: string
    placeId: string
  }, ExtArgs["result"]["address"]>
  composites: {}
}

/**
 * Model Address
 * 
 */
export type Address = runtime.Types.DefaultSelection<AddressPayload>
export type PersonPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Person"
  objects: {
    address: AddressPayload<ExtArgs> | null
    user: UserPayload<ExtArgs> | null
  }
  scalars: $Extensions.GetResult<{
    id: number
    firstName: string
    lastName: string
    email: string
    phone: string | null
    phone2: string | null
    addressId: number | null
  }, ExtArgs["result"]["person"]>
  composites: {}
}

/**
 * Model Person
 * 
 */
export type Person = runtime.Types.DefaultSelection<PersonPayload>
export type UserPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "User"
  objects: {
    person: PersonPayload<ExtArgs>
    records: RecordPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: number
    lang: Lang
    login: string
    admin: boolean
    password: string | null
    active: boolean
    connexionToken: string
    personId: number
  }, ExtArgs["result"]["user"]>
  composites: {}
}

/**
 * Model User
 * 
 */
export type User = runtime.Types.DefaultSelection<UserPayload>
export type RequestPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Request"
  objects: {}
  scalars: $Extensions.GetResult<{
    id: number
    date: Date
    status: RequestStatus
    response: Prisma.JsonValue
  }, ExtArgs["result"]["request"]>
  composites: {}
}

/**
 * Model Request
 * 
 */
export type Request = runtime.Types.DefaultSelection<RequestPayload>
export type RecordPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Record"
  objects: {
    author: UserPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: number
    date: Date
    action: RecordAction
    object: string
    newValue: string
    authorId: number
  }, ExtArgs["result"]["record"]>
  composites: {}
}

/**
 * Model Record
 * 
 */
export type Record = runtime.Types.DefaultSelection<RecordPayload>

/**
 * Enums
 */

export const Lang: {
  en: 'en',
  fr: 'fr'
};

export type Lang = (typeof Lang)[keyof typeof Lang]


export const RequestStatus: {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR'
};

export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus]


export const RecordAction: {
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE'
};

export type RecordAction = (typeof RecordAction)[keyof typeof RecordAction]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Addresses
 * const addresses = await prisma.address.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Addresses
   * const addresses = await prisma.address.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs>;

  /**
   * `prisma.person`: Exposes CRUD operations for the **Person** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more People
    * const people = await prisma.person.findMany()
    * ```
    */
  get person(): Prisma.PersonDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.request`: Exposes CRUD operations for the **Request** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Requests
    * const requests = await prisma.request.findMany()
    * ```
    */
  get request(): Prisma.RequestDelegate<ExtArgs>;

  /**
   * `prisma.record`: Exposes CRUD operations for the **Record** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Records
    * const records = await prisma.record.findMany()
    * ```
    */
  get record(): Prisma.RecordDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export type Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export type Args<T, F extends $Public.Operation> = $Public.Args<T, F>
  export type Payload<T, F extends $Public.Operation> = $Public.Payload<T, F>
  export type Result<T, A, F extends $Public.Operation> = $Public.Result<T, A, F>
  export type Exact<T, W> = $Public.Exact<T, W>

  /**
   * Prisma Client JS version: 5.0.0
   * Query Engine version: 6b0aef69b7cdfc787f822ecd7cdc76d5f1991584
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Address: 'Address',
    Person: 'Person',
    User: 'User',
    Request: 'Request',
    Record: 'Record'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'address' | 'person' | 'user' | 'request' | 'record'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Address: {
        payload: AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>,
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      Person: {
        payload: PersonPayload<ExtArgs>
        fields: Prisma.PersonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PersonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PersonPayload>
          }
          findFirst: {
            args: Prisma.PersonFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PersonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PersonPayload>
          }
          findMany: {
            args: Prisma.PersonFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PersonPayload>[]
          }
          create: {
            args: Prisma.PersonCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PersonPayload>
          }
          createMany: {
            args: Prisma.PersonCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PersonDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PersonPayload>
          }
          update: {
            args: Prisma.PersonUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PersonPayload>
          }
          deleteMany: {
            args: Prisma.PersonDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PersonUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PersonUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PersonPayload>
          }
          aggregate: {
            args: Prisma.PersonAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePerson>
          }
          groupBy: {
            args: Prisma.PersonGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PersonGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonCountArgs<ExtArgs>,
            result: $Utils.Optional<PersonCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Request: {
        payload: RequestPayload<ExtArgs>
        fields: Prisma.RequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RequestFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RequestFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RequestPayload>
          }
          findFirst: {
            args: Prisma.RequestFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RequestFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RequestPayload>
          }
          findMany: {
            args: Prisma.RequestFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RequestPayload>[]
          }
          create: {
            args: Prisma.RequestCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RequestPayload>
          }
          createMany: {
            args: Prisma.RequestCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RequestDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RequestPayload>
          }
          update: {
            args: Prisma.RequestUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RequestPayload>
          }
          deleteMany: {
            args: Prisma.RequestDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RequestUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RequestUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RequestPayload>
          }
          aggregate: {
            args: Prisma.RequestAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRequest>
          }
          groupBy: {
            args: Prisma.RequestGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.RequestCountArgs<ExtArgs>,
            result: $Utils.Optional<RequestCountAggregateOutputType> | number
          }
        }
      }
      Record: {
        payload: RecordPayload<ExtArgs>
        fields: Prisma.RecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecordFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecordFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RecordPayload>
          }
          findFirst: {
            args: Prisma.RecordFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecordFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RecordPayload>
          }
          findMany: {
            args: Prisma.RecordFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RecordPayload>[]
          }
          create: {
            args: Prisma.RecordCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RecordPayload>
          }
          createMany: {
            args: Prisma.RecordCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RecordDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RecordPayload>
          }
          update: {
            args: Prisma.RecordUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RecordPayload>
          }
          deleteMany: {
            args: Prisma.RecordDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RecordUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RecordUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RecordPayload>
          }
          aggregate: {
            args: Prisma.RecordAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRecord>
          }
          groupBy: {
            args: Prisma.RecordGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecordCountArgs<ExtArgs>,
            result: $Utils.Optional<RecordCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    records: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    records?: boolean | UserCountOutputTypeCountRecordsArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRecordsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: RecordWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Address
   */


  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressAvgAggregateOutputType = {
    id: number | null
  }

  export type AddressSumAggregateOutputType = {
    id: number | null
  }

  export type AddressMinAggregateOutputType = {
    id: number | null
    streetNumber: string | null
    street: string | null
    zip: string | null
    city: string | null
    country: string | null
    placeId: string | null
  }

  export type AddressMaxAggregateOutputType = {
    id: number | null
    streetNumber: string | null
    street: string | null
    zip: string | null
    city: string | null
    country: string | null
    placeId: string | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    streetNumber: number
    street: number
    zip: number
    city: number
    country: number
    placeId: number
    _all: number
  }


  export type AddressAvgAggregateInputType = {
    id?: true
  }

  export type AddressSumAggregateInputType = {
    id?: true
  }

  export type AddressMinAggregateInputType = {
    id?: true
    streetNumber?: true
    street?: true
    zip?: true
    city?: true
    country?: true
    placeId?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    streetNumber?: true
    street?: true
    zip?: true
    city?: true
    country?: true
    placeId?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    streetNumber?: true
    street?: true
    zip?: true
    city?: true
    country?: true
    placeId?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _avg?: AddressAvgAggregateInputType
    _sum?: AddressSumAggregateInputType
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }


  export type AddressGroupByOutputType = {
    id: number
    streetNumber: string
    street: string
    zip: string
    city: string
    country: string
    placeId: string
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    streetNumber?: boolean
    street?: boolean
    zip?: boolean
    city?: boolean
    country?: boolean
    placeId?: boolean
    person?: boolean | Address$personArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectScalar = {
    id?: boolean
    streetNumber?: boolean
    street?: boolean
    zip?: boolean
    city?: boolean
    country?: boolean
    placeId?: boolean
  }

  export type AddressInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    person?: boolean | Address$personArgs<ExtArgs>
  }


  type AddressGetPayload<S extends boolean | null | undefined | AddressArgs> = $Types.GetResult<AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<AddressFindManyArgs, 'select' | 'include'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AddressFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>
    ): Prisma__AddressClient<$Types.GetResult<AddressPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Address that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AddressClient<$Types.GetResult<AddressPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AddressFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>
    ): Prisma__AddressClient<$Types.GetResult<AddressPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AddressClient<$Types.GetResult<AddressPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AddressFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<AddressPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
    **/
    create<T extends AddressCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AddressCreateArgs<ExtArgs>>
    ): Prisma__AddressClient<$Types.GetResult<AddressPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Addresses.
     *     @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     *     @example
     *     // Create many Addresses
     *     const address = await prisma.address.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AddressCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
    **/
    delete<T extends AddressDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>
    ): Prisma__AddressClient<$Types.GetResult<AddressPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AddressUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>
    ): Prisma__AddressClient<$Types.GetResult<AddressPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AddressDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AddressUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
    **/
    upsert<T extends AddressUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>
    ): Prisma__AddressClient<$Types.GetResult<AddressPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    person<T extends Address$personArgs<ExtArgs> = {}>(args?: Subset<T, Address$personArgs<ExtArgs>>): Prisma__PersonClient<$Types.GetResult<PersonPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the Address model
   */ 
  interface AddressFieldRefs {
    readonly id: FieldRef<"Address", 'Int'>
    readonly streetNumber: FieldRef<"Address", 'String'>
    readonly street: FieldRef<"Address", 'String'>
    readonly zip: FieldRef<"Address", 'String'>
    readonly city: FieldRef<"Address", 'String'>
    readonly country: FieldRef<"Address", 'String'>
    readonly placeId: FieldRef<"Address", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }


  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }


  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }


  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }


  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }


  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }


  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }


  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
  }


  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }


  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }


  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
  }


  /**
   * Address.person
   */
  export type Address$personArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonInclude<ExtArgs> | null
    where?: PersonWhereInput
  }


  /**
   * Address without action
   */
  export type AddressArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
  }



  /**
   * Model Person
   */


  export type AggregatePerson = {
    _count: PersonCountAggregateOutputType | null
    _avg: PersonAvgAggregateOutputType | null
    _sum: PersonSumAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  export type PersonAvgAggregateOutputType = {
    id: number | null
    addressId: number | null
  }

  export type PersonSumAggregateOutputType = {
    id: number | null
    addressId: number | null
  }

  export type PersonMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    phone2: string | null
    addressId: number | null
  }

  export type PersonMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    phone2: string | null
    addressId: number | null
  }

  export type PersonCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    phone: number
    phone2: number
    addressId: number
    _all: number
  }


  export type PersonAvgAggregateInputType = {
    id?: true
    addressId?: true
  }

  export type PersonSumAggregateInputType = {
    id?: true
    addressId?: true
  }

  export type PersonMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    phone2?: true
    addressId?: true
  }

  export type PersonMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    phone2?: true
    addressId?: true
  }

  export type PersonCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    phone2?: true
    addressId?: true
    _all?: true
  }

  export type PersonAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Person to aggregate.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned People
    **/
    _count?: true | PersonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PersonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PersonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonMaxAggregateInputType
  }

  export type GetPersonAggregateType<T extends PersonAggregateArgs> = {
        [P in keyof T & keyof AggregatePerson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerson[P]>
      : GetScalarType<T[P], AggregatePerson[P]>
  }




  export type PersonGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PersonWhereInput
    orderBy?: PersonOrderByWithAggregationInput | PersonOrderByWithAggregationInput[]
    by: PersonScalarFieldEnum[] | PersonScalarFieldEnum
    having?: PersonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonCountAggregateInputType | true
    _avg?: PersonAvgAggregateInputType
    _sum?: PersonSumAggregateInputType
    _min?: PersonMinAggregateInputType
    _max?: PersonMaxAggregateInputType
  }


  export type PersonGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    email: string
    phone: string | null
    phone2: string | null
    addressId: number | null
    _count: PersonCountAggregateOutputType | null
    _avg: PersonAvgAggregateOutputType | null
    _sum: PersonSumAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  type GetPersonGroupByPayload<T extends PersonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonGroupByOutputType[P]>
            : GetScalarType<T[P], PersonGroupByOutputType[P]>
        }
      >
    >


  export type PersonSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    phone2?: boolean
    addressId?: boolean
    address?: boolean | Person$addressArgs<ExtArgs>
    user?: boolean | Person$userArgs<ExtArgs>
  }, ExtArgs["result"]["person"]>

  export type PersonSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    phone2?: boolean
    addressId?: boolean
  }

  export type PersonInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    address?: boolean | Person$addressArgs<ExtArgs>
    user?: boolean | Person$userArgs<ExtArgs>
  }


  type PersonGetPayload<S extends boolean | null | undefined | PersonArgs> = $Types.GetResult<PersonPayload, S>

  type PersonCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<PersonFindManyArgs, 'select' | 'include'> & {
      select?: PersonCountAggregateInputType | true
    }

  export interface PersonDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Person'], meta: { name: 'Person' } }
    /**
     * Find zero or one Person that matches the filter.
     * @param {PersonFindUniqueArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PersonFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PersonFindUniqueArgs<ExtArgs>>
    ): Prisma__PersonClient<$Types.GetResult<PersonPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Person that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PersonFindUniqueOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PersonFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PersonFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PersonClient<$Types.GetResult<PersonPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Person that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindFirstArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PersonFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PersonFindFirstArgs<ExtArgs>>
    ): Prisma__PersonClient<$Types.GetResult<PersonPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Person that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindFirstOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PersonFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PersonFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PersonClient<$Types.GetResult<PersonPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more People that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all People
     * const people = await prisma.person.findMany()
     * 
     * // Get first 10 People
     * const people = await prisma.person.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personWithIdOnly = await prisma.person.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PersonFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PersonFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<PersonPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Person.
     * @param {PersonCreateArgs} args - Arguments to create a Person.
     * @example
     * // Create one Person
     * const Person = await prisma.person.create({
     *   data: {
     *     // ... data to create a Person
     *   }
     * })
     * 
    **/
    create<T extends PersonCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PersonCreateArgs<ExtArgs>>
    ): Prisma__PersonClient<$Types.GetResult<PersonPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many People.
     *     @param {PersonCreateManyArgs} args - Arguments to create many People.
     *     @example
     *     // Create many People
     *     const person = await prisma.person.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PersonCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PersonCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Person.
     * @param {PersonDeleteArgs} args - Arguments to delete one Person.
     * @example
     * // Delete one Person
     * const Person = await prisma.person.delete({
     *   where: {
     *     // ... filter to delete one Person
     *   }
     * })
     * 
    **/
    delete<T extends PersonDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PersonDeleteArgs<ExtArgs>>
    ): Prisma__PersonClient<$Types.GetResult<PersonPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Person.
     * @param {PersonUpdateArgs} args - Arguments to update one Person.
     * @example
     * // Update one Person
     * const person = await prisma.person.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PersonUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PersonUpdateArgs<ExtArgs>>
    ): Prisma__PersonClient<$Types.GetResult<PersonPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more People.
     * @param {PersonDeleteManyArgs} args - Arguments to filter People to delete.
     * @example
     * // Delete a few People
     * const { count } = await prisma.person.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PersonDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PersonDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many People
     * const person = await prisma.person.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PersonUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PersonUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Person.
     * @param {PersonUpsertArgs} args - Arguments to update or create a Person.
     * @example
     * // Update or create a Person
     * const person = await prisma.person.upsert({
     *   create: {
     *     // ... data to create a Person
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Person we want to update
     *   }
     * })
    **/
    upsert<T extends PersonUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PersonUpsertArgs<ExtArgs>>
    ): Prisma__PersonClient<$Types.GetResult<PersonPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonCountArgs} args - Arguments to filter People to count.
     * @example
     * // Count the number of People
     * const count = await prisma.person.count({
     *   where: {
     *     // ... the filter for the People we want to count
     *   }
     * })
    **/
    count<T extends PersonCountArgs>(
      args?: Subset<T, PersonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PersonAggregateArgs>(args: Subset<T, PersonAggregateArgs>): Prisma.PrismaPromise<GetPersonAggregateType<T>>

    /**
     * Group by Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PersonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonGroupByArgs['orderBy'] }
        : { orderBy?: PersonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PersonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Person model
   */
  readonly fields: PersonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Person.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PersonClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    address<T extends Person$addressArgs<ExtArgs> = {}>(args?: Subset<T, Person$addressArgs<ExtArgs>>): Prisma__AddressClient<$Types.GetResult<AddressPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    user<T extends Person$userArgs<ExtArgs> = {}>(args?: Subset<T, Person$userArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the Person model
   */ 
  interface PersonFieldRefs {
    readonly id: FieldRef<"Person", 'Int'>
    readonly firstName: FieldRef<"Person", 'String'>
    readonly lastName: FieldRef<"Person", 'String'>
    readonly email: FieldRef<"Person", 'String'>
    readonly phone: FieldRef<"Person", 'String'>
    readonly phone2: FieldRef<"Person", 'String'>
    readonly addressId: FieldRef<"Person", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Person findUnique
   */
  export type PersonFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where: PersonWhereUniqueInput
  }


  /**
   * Person findUniqueOrThrow
   */
  export type PersonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where: PersonWhereUniqueInput
  }


  /**
   * Person findFirst
   */
  export type PersonFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of People.
     */
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }


  /**
   * Person findFirstOrThrow
   */
  export type PersonFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of People.
     */
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }


  /**
   * Person findMany
   */
  export type PersonFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which People to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }


  /**
   * Person create
   */
  export type PersonCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The data needed to create a Person.
     */
    data: XOR<PersonCreateInput, PersonUncheckedCreateInput>
  }


  /**
   * Person createMany
   */
  export type PersonCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many People.
     */
    data: PersonCreateManyInput | PersonCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Person update
   */
  export type PersonUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The data needed to update a Person.
     */
    data: XOR<PersonUpdateInput, PersonUncheckedUpdateInput>
    /**
     * Choose, which Person to update.
     */
    where: PersonWhereUniqueInput
  }


  /**
   * Person updateMany
   */
  export type PersonUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update People.
     */
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyInput>
    /**
     * Filter which People to update
     */
    where?: PersonWhereInput
  }


  /**
   * Person upsert
   */
  export type PersonUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The filter to search for the Person to update in case it exists.
     */
    where: PersonWhereUniqueInput
    /**
     * In case the Person found by the `where` argument doesn't exist, create a new Person with this data.
     */
    create: XOR<PersonCreateInput, PersonUncheckedCreateInput>
    /**
     * In case the Person was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonUpdateInput, PersonUncheckedUpdateInput>
  }


  /**
   * Person delete
   */
  export type PersonDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter which Person to delete.
     */
    where: PersonWhereUniqueInput
  }


  /**
   * Person deleteMany
   */
  export type PersonDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which People to delete
     */
    where?: PersonWhereInput
  }


  /**
   * Person.address
   */
  export type Person$addressArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
  }


  /**
   * Person.user
   */
  export type Person$userArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Person without action
   */
  export type PersonArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonInclude<ExtArgs> | null
  }



  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    personId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    personId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    lang: Lang | null
    login: string | null
    admin: boolean | null
    password: string | null
    active: boolean | null
    connexionToken: string | null
    personId: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    lang: Lang | null
    login: string | null
    admin: boolean | null
    password: string | null
    active: boolean | null
    connexionToken: string | null
    personId: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    lang: number
    login: number
    admin: number
    password: number
    active: number
    connexionToken: number
    personId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    personId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    personId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    lang?: true
    login?: true
    admin?: true
    password?: true
    active?: true
    connexionToken?: true
    personId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    lang?: true
    login?: true
    admin?: true
    password?: true
    active?: true
    connexionToken?: true
    personId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    lang?: true
    login?: true
    admin?: true
    password?: true
    active?: true
    connexionToken?: true
    personId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    lang: Lang
    login: string
    admin: boolean
    password: string | null
    active: boolean
    connexionToken: string
    personId: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lang?: boolean
    login?: boolean
    admin?: boolean
    password?: boolean
    active?: boolean
    connexionToken?: boolean
    personId?: boolean
    person?: boolean | PersonArgs<ExtArgs>
    records?: boolean | User$recordsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    lang?: boolean
    login?: boolean
    admin?: boolean
    password?: boolean
    active?: boolean
    connexionToken?: boolean
    personId?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    person?: boolean | PersonArgs<ExtArgs>
    records?: boolean | User$recordsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeArgs<ExtArgs>
  }


  type UserGetPayload<S extends boolean | null | undefined | UserArgs> = $Types.GetResult<UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    person<T extends PersonArgs<ExtArgs> = {}>(args?: Subset<T, PersonArgs<ExtArgs>>): Prisma__PersonClient<$Types.GetResult<PersonPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    records<T extends User$recordsArgs<ExtArgs> = {}>(args?: Subset<T, User$recordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<RecordPayload<ExtArgs>, T, 'findMany'>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly lang: FieldRef<"User", 'Lang'>
    readonly login: FieldRef<"User", 'String'>
    readonly admin: FieldRef<"User", 'Boolean'>
    readonly password: FieldRef<"User", 'String'>
    readonly active: FieldRef<"User", 'Boolean'>
    readonly connexionToken: FieldRef<"User", 'String'>
    readonly personId: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.records
   */
  export type User$recordsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecordInclude<ExtArgs> | null
    where?: RecordWhereInput
    orderBy?: RecordOrderByWithRelationInput | RecordOrderByWithRelationInput[]
    cursor?: RecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecordScalarFieldEnum | RecordScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Request
   */


  export type AggregateRequest = {
    _count: RequestCountAggregateOutputType | null
    _avg: RequestAvgAggregateOutputType | null
    _sum: RequestSumAggregateOutputType | null
    _min: RequestMinAggregateOutputType | null
    _max: RequestMaxAggregateOutputType | null
  }

  export type RequestAvgAggregateOutputType = {
    id: number | null
  }

  export type RequestSumAggregateOutputType = {
    id: number | null
  }

  export type RequestMinAggregateOutputType = {
    id: number | null
    date: Date | null
    status: RequestStatus | null
  }

  export type RequestMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    status: RequestStatus | null
  }

  export type RequestCountAggregateOutputType = {
    id: number
    date: number
    status: number
    response: number
    _all: number
  }


  export type RequestAvgAggregateInputType = {
    id?: true
  }

  export type RequestSumAggregateInputType = {
    id?: true
  }

  export type RequestMinAggregateInputType = {
    id?: true
    date?: true
    status?: true
  }

  export type RequestMaxAggregateInputType = {
    id?: true
    date?: true
    status?: true
  }

  export type RequestCountAggregateInputType = {
    id?: true
    date?: true
    status?: true
    response?: true
    _all?: true
  }

  export type RequestAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Request to aggregate.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Requests
    **/
    _count?: true | RequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequestMaxAggregateInputType
  }

  export type GetRequestAggregateType<T extends RequestAggregateArgs> = {
        [P in keyof T & keyof AggregateRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequest[P]>
      : GetScalarType<T[P], AggregateRequest[P]>
  }




  export type RequestGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: RequestWhereInput
    orderBy?: RequestOrderByWithAggregationInput | RequestOrderByWithAggregationInput[]
    by: RequestScalarFieldEnum[] | RequestScalarFieldEnum
    having?: RequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequestCountAggregateInputType | true
    _avg?: RequestAvgAggregateInputType
    _sum?: RequestSumAggregateInputType
    _min?: RequestMinAggregateInputType
    _max?: RequestMaxAggregateInputType
  }


  export type RequestGroupByOutputType = {
    id: number
    date: Date
    status: RequestStatus
    response: JsonValue
    _count: RequestCountAggregateOutputType | null
    _avg: RequestAvgAggregateOutputType | null
    _sum: RequestSumAggregateOutputType | null
    _min: RequestMinAggregateOutputType | null
    _max: RequestMaxAggregateOutputType | null
  }

  type GetRequestGroupByPayload<T extends RequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequestGroupByOutputType[P]>
            : GetScalarType<T[P], RequestGroupByOutputType[P]>
        }
      >
    >


  export type RequestSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    status?: boolean
    response?: boolean
  }, ExtArgs["result"]["request"]>

  export type RequestSelectScalar = {
    id?: boolean
    date?: boolean
    status?: boolean
    response?: boolean
  }


  type RequestGetPayload<S extends boolean | null | undefined | RequestArgs> = $Types.GetResult<RequestPayload, S>

  type RequestCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<RequestFindManyArgs, 'select' | 'include'> & {
      select?: RequestCountAggregateInputType | true
    }

  export interface RequestDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Request'], meta: { name: 'Request' } }
    /**
     * Find zero or one Request that matches the filter.
     * @param {RequestFindUniqueArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RequestFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RequestFindUniqueArgs<ExtArgs>>
    ): Prisma__RequestClient<$Types.GetResult<RequestPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Request that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RequestFindUniqueOrThrowArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RequestFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RequestFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RequestClient<$Types.GetResult<RequestPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Request that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindFirstArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RequestFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RequestFindFirstArgs<ExtArgs>>
    ): Prisma__RequestClient<$Types.GetResult<RequestPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Request that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindFirstOrThrowArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RequestFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RequestFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RequestClient<$Types.GetResult<RequestPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Requests
     * const requests = await prisma.request.findMany()
     * 
     * // Get first 10 Requests
     * const requests = await prisma.request.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const requestWithIdOnly = await prisma.request.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RequestFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RequestFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<RequestPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Request.
     * @param {RequestCreateArgs} args - Arguments to create a Request.
     * @example
     * // Create one Request
     * const Request = await prisma.request.create({
     *   data: {
     *     // ... data to create a Request
     *   }
     * })
     * 
    **/
    create<T extends RequestCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RequestCreateArgs<ExtArgs>>
    ): Prisma__RequestClient<$Types.GetResult<RequestPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Requests.
     *     @param {RequestCreateManyArgs} args - Arguments to create many Requests.
     *     @example
     *     // Create many Requests
     *     const request = await prisma.request.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RequestCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RequestCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Request.
     * @param {RequestDeleteArgs} args - Arguments to delete one Request.
     * @example
     * // Delete one Request
     * const Request = await prisma.request.delete({
     *   where: {
     *     // ... filter to delete one Request
     *   }
     * })
     * 
    **/
    delete<T extends RequestDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RequestDeleteArgs<ExtArgs>>
    ): Prisma__RequestClient<$Types.GetResult<RequestPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Request.
     * @param {RequestUpdateArgs} args - Arguments to update one Request.
     * @example
     * // Update one Request
     * const request = await prisma.request.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RequestUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RequestUpdateArgs<ExtArgs>>
    ): Prisma__RequestClient<$Types.GetResult<RequestPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Requests.
     * @param {RequestDeleteManyArgs} args - Arguments to filter Requests to delete.
     * @example
     * // Delete a few Requests
     * const { count } = await prisma.request.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RequestDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RequestDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Requests
     * const request = await prisma.request.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RequestUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RequestUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Request.
     * @param {RequestUpsertArgs} args - Arguments to update or create a Request.
     * @example
     * // Update or create a Request
     * const request = await prisma.request.upsert({
     *   create: {
     *     // ... data to create a Request
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Request we want to update
     *   }
     * })
    **/
    upsert<T extends RequestUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RequestUpsertArgs<ExtArgs>>
    ): Prisma__RequestClient<$Types.GetResult<RequestPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestCountArgs} args - Arguments to filter Requests to count.
     * @example
     * // Count the number of Requests
     * const count = await prisma.request.count({
     *   where: {
     *     // ... the filter for the Requests we want to count
     *   }
     * })
    **/
    count<T extends RequestCountArgs>(
      args?: Subset<T, RequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RequestAggregateArgs>(args: Subset<T, RequestAggregateArgs>): Prisma.PrismaPromise<GetRequestAggregateType<T>>

    /**
     * Group by Request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequestGroupByArgs['orderBy'] }
        : { orderBy?: RequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Request model
   */
  readonly fields: RequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Request.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RequestClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the Request model
   */ 
  interface RequestFieldRefs {
    readonly id: FieldRef<"Request", 'Int'>
    readonly date: FieldRef<"Request", 'DateTime'>
    readonly status: FieldRef<"Request", 'RequestStatus'>
    readonly response: FieldRef<"Request", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * Request findUnique
   */
  export type RequestFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where: RequestWhereUniqueInput
  }


  /**
   * Request findUniqueOrThrow
   */
  export type RequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where: RequestWhereUniqueInput
  }


  /**
   * Request findFirst
   */
  export type RequestFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Requests.
     */
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }


  /**
   * Request findFirstOrThrow
   */
  export type RequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Requests.
     */
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }


  /**
   * Request findMany
   */
  export type RequestFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Filter, which Requests to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }


  /**
   * Request create
   */
  export type RequestCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * The data needed to create a Request.
     */
    data: XOR<RequestCreateInput, RequestUncheckedCreateInput>
  }


  /**
   * Request createMany
   */
  export type RequestCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Requests.
     */
    data: RequestCreateManyInput | RequestCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Request update
   */
  export type RequestUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * The data needed to update a Request.
     */
    data: XOR<RequestUpdateInput, RequestUncheckedUpdateInput>
    /**
     * Choose, which Request to update.
     */
    where: RequestWhereUniqueInput
  }


  /**
   * Request updateMany
   */
  export type RequestUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Requests.
     */
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyInput>
    /**
     * Filter which Requests to update
     */
    where?: RequestWhereInput
  }


  /**
   * Request upsert
   */
  export type RequestUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * The filter to search for the Request to update in case it exists.
     */
    where: RequestWhereUniqueInput
    /**
     * In case the Request found by the `where` argument doesn't exist, create a new Request with this data.
     */
    create: XOR<RequestCreateInput, RequestUncheckedCreateInput>
    /**
     * In case the Request was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RequestUpdateInput, RequestUncheckedUpdateInput>
  }


  /**
   * Request delete
   */
  export type RequestDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Filter which Request to delete.
     */
    where: RequestWhereUniqueInput
  }


  /**
   * Request deleteMany
   */
  export type RequestDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Requests to delete
     */
    where?: RequestWhereInput
  }


  /**
   * Request without action
   */
  export type RequestArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
  }



  /**
   * Model Record
   */


  export type AggregateRecord = {
    _count: RecordCountAggregateOutputType | null
    _avg: RecordAvgAggregateOutputType | null
    _sum: RecordSumAggregateOutputType | null
    _min: RecordMinAggregateOutputType | null
    _max: RecordMaxAggregateOutputType | null
  }

  export type RecordAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type RecordSumAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type RecordMinAggregateOutputType = {
    id: number | null
    date: Date | null
    action: RecordAction | null
    object: string | null
    newValue: string | null
    authorId: number | null
  }

  export type RecordMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    action: RecordAction | null
    object: string | null
    newValue: string | null
    authorId: number | null
  }

  export type RecordCountAggregateOutputType = {
    id: number
    date: number
    action: number
    object: number
    newValue: number
    authorId: number
    _all: number
  }


  export type RecordAvgAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type RecordSumAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type RecordMinAggregateInputType = {
    id?: true
    date?: true
    action?: true
    object?: true
    newValue?: true
    authorId?: true
  }

  export type RecordMaxAggregateInputType = {
    id?: true
    date?: true
    action?: true
    object?: true
    newValue?: true
    authorId?: true
  }

  export type RecordCountAggregateInputType = {
    id?: true
    date?: true
    action?: true
    object?: true
    newValue?: true
    authorId?: true
    _all?: true
  }

  export type RecordAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Record to aggregate.
     */
    where?: RecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Records to fetch.
     */
    orderBy?: RecordOrderByWithRelationInput | RecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Records.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Records
    **/
    _count?: true | RecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecordMaxAggregateInputType
  }

  export type GetRecordAggregateType<T extends RecordAggregateArgs> = {
        [P in keyof T & keyof AggregateRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecord[P]>
      : GetScalarType<T[P], AggregateRecord[P]>
  }




  export type RecordGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: RecordWhereInput
    orderBy?: RecordOrderByWithAggregationInput | RecordOrderByWithAggregationInput[]
    by: RecordScalarFieldEnum[] | RecordScalarFieldEnum
    having?: RecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecordCountAggregateInputType | true
    _avg?: RecordAvgAggregateInputType
    _sum?: RecordSumAggregateInputType
    _min?: RecordMinAggregateInputType
    _max?: RecordMaxAggregateInputType
  }


  export type RecordGroupByOutputType = {
    id: number
    date: Date
    action: RecordAction
    object: string
    newValue: string
    authorId: number
    _count: RecordCountAggregateOutputType | null
    _avg: RecordAvgAggregateOutputType | null
    _sum: RecordSumAggregateOutputType | null
    _min: RecordMinAggregateOutputType | null
    _max: RecordMaxAggregateOutputType | null
  }

  type GetRecordGroupByPayload<T extends RecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecordGroupByOutputType[P]>
            : GetScalarType<T[P], RecordGroupByOutputType[P]>
        }
      >
    >


  export type RecordSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    action?: boolean
    object?: boolean
    newValue?: boolean
    authorId?: boolean
    author?: boolean | UserArgs<ExtArgs>
  }, ExtArgs["result"]["record"]>

  export type RecordSelectScalar = {
    id?: boolean
    date?: boolean
    action?: boolean
    object?: boolean
    newValue?: boolean
    authorId?: boolean
  }

  export type RecordInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    author?: boolean | UserArgs<ExtArgs>
  }


  type RecordGetPayload<S extends boolean | null | undefined | RecordArgs> = $Types.GetResult<RecordPayload, S>

  type RecordCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<RecordFindManyArgs, 'select' | 'include'> & {
      select?: RecordCountAggregateInputType | true
    }

  export interface RecordDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Record'], meta: { name: 'Record' } }
    /**
     * Find zero or one Record that matches the filter.
     * @param {RecordFindUniqueArgs} args - Arguments to find a Record
     * @example
     * // Get one Record
     * const record = await prisma.record.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RecordFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RecordFindUniqueArgs<ExtArgs>>
    ): Prisma__RecordClient<$Types.GetResult<RecordPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Record that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RecordFindUniqueOrThrowArgs} args - Arguments to find a Record
     * @example
     * // Get one Record
     * const record = await prisma.record.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RecordFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RecordFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RecordClient<$Types.GetResult<RecordPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Record that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordFindFirstArgs} args - Arguments to find a Record
     * @example
     * // Get one Record
     * const record = await prisma.record.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RecordFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RecordFindFirstArgs<ExtArgs>>
    ): Prisma__RecordClient<$Types.GetResult<RecordPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Record that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordFindFirstOrThrowArgs} args - Arguments to find a Record
     * @example
     * // Get one Record
     * const record = await prisma.record.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RecordFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RecordFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RecordClient<$Types.GetResult<RecordPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Records that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Records
     * const records = await prisma.record.findMany()
     * 
     * // Get first 10 Records
     * const records = await prisma.record.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recordWithIdOnly = await prisma.record.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RecordFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RecordFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<RecordPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Record.
     * @param {RecordCreateArgs} args - Arguments to create a Record.
     * @example
     * // Create one Record
     * const Record = await prisma.record.create({
     *   data: {
     *     // ... data to create a Record
     *   }
     * })
     * 
    **/
    create<T extends RecordCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RecordCreateArgs<ExtArgs>>
    ): Prisma__RecordClient<$Types.GetResult<RecordPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Records.
     *     @param {RecordCreateManyArgs} args - Arguments to create many Records.
     *     @example
     *     // Create many Records
     *     const record = await prisma.record.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RecordCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RecordCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Record.
     * @param {RecordDeleteArgs} args - Arguments to delete one Record.
     * @example
     * // Delete one Record
     * const Record = await prisma.record.delete({
     *   where: {
     *     // ... filter to delete one Record
     *   }
     * })
     * 
    **/
    delete<T extends RecordDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RecordDeleteArgs<ExtArgs>>
    ): Prisma__RecordClient<$Types.GetResult<RecordPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Record.
     * @param {RecordUpdateArgs} args - Arguments to update one Record.
     * @example
     * // Update one Record
     * const record = await prisma.record.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RecordUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RecordUpdateArgs<ExtArgs>>
    ): Prisma__RecordClient<$Types.GetResult<RecordPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Records.
     * @param {RecordDeleteManyArgs} args - Arguments to filter Records to delete.
     * @example
     * // Delete a few Records
     * const { count } = await prisma.record.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RecordDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RecordDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Records
     * const record = await prisma.record.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RecordUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RecordUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Record.
     * @param {RecordUpsertArgs} args - Arguments to update or create a Record.
     * @example
     * // Update or create a Record
     * const record = await prisma.record.upsert({
     *   create: {
     *     // ... data to create a Record
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Record we want to update
     *   }
     * })
    **/
    upsert<T extends RecordUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RecordUpsertArgs<ExtArgs>>
    ): Prisma__RecordClient<$Types.GetResult<RecordPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordCountArgs} args - Arguments to filter Records to count.
     * @example
     * // Count the number of Records
     * const count = await prisma.record.count({
     *   where: {
     *     // ... the filter for the Records we want to count
     *   }
     * })
    **/
    count<T extends RecordCountArgs>(
      args?: Subset<T, RecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Record.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecordAggregateArgs>(args: Subset<T, RecordAggregateArgs>): Prisma.PrismaPromise<GetRecordAggregateType<T>>

    /**
     * Group by Record.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecordGroupByArgs['orderBy'] }
        : { orderBy?: RecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Record model
   */
  readonly fields: RecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Record.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RecordClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    author<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the Record model
   */ 
  interface RecordFieldRefs {
    readonly id: FieldRef<"Record", 'Int'>
    readonly date: FieldRef<"Record", 'DateTime'>
    readonly action: FieldRef<"Record", 'RecordAction'>
    readonly object: FieldRef<"Record", 'String'>
    readonly newValue: FieldRef<"Record", 'String'>
    readonly authorId: FieldRef<"Record", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Record findUnique
   */
  export type RecordFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * Filter, which Record to fetch.
     */
    where: RecordWhereUniqueInput
  }


  /**
   * Record findUniqueOrThrow
   */
  export type RecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * Filter, which Record to fetch.
     */
    where: RecordWhereUniqueInput
  }


  /**
   * Record findFirst
   */
  export type RecordFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * Filter, which Record to fetch.
     */
    where?: RecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Records to fetch.
     */
    orderBy?: RecordOrderByWithRelationInput | RecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Records.
     */
    cursor?: RecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Records.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Records.
     */
    distinct?: RecordScalarFieldEnum | RecordScalarFieldEnum[]
  }


  /**
   * Record findFirstOrThrow
   */
  export type RecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * Filter, which Record to fetch.
     */
    where?: RecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Records to fetch.
     */
    orderBy?: RecordOrderByWithRelationInput | RecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Records.
     */
    cursor?: RecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Records.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Records.
     */
    distinct?: RecordScalarFieldEnum | RecordScalarFieldEnum[]
  }


  /**
   * Record findMany
   */
  export type RecordFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * Filter, which Records to fetch.
     */
    where?: RecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Records to fetch.
     */
    orderBy?: RecordOrderByWithRelationInput | RecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Records.
     */
    cursor?: RecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Records.
     */
    skip?: number
    distinct?: RecordScalarFieldEnum | RecordScalarFieldEnum[]
  }


  /**
   * Record create
   */
  export type RecordCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * The data needed to create a Record.
     */
    data: XOR<RecordCreateInput, RecordUncheckedCreateInput>
  }


  /**
   * Record createMany
   */
  export type RecordCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Records.
     */
    data: RecordCreateManyInput | RecordCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Record update
   */
  export type RecordUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * The data needed to update a Record.
     */
    data: XOR<RecordUpdateInput, RecordUncheckedUpdateInput>
    /**
     * Choose, which Record to update.
     */
    where: RecordWhereUniqueInput
  }


  /**
   * Record updateMany
   */
  export type RecordUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Records.
     */
    data: XOR<RecordUpdateManyMutationInput, RecordUncheckedUpdateManyInput>
    /**
     * Filter which Records to update
     */
    where?: RecordWhereInput
  }


  /**
   * Record upsert
   */
  export type RecordUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * The filter to search for the Record to update in case it exists.
     */
    where: RecordWhereUniqueInput
    /**
     * In case the Record found by the `where` argument doesn't exist, create a new Record with this data.
     */
    create: XOR<RecordCreateInput, RecordUncheckedCreateInput>
    /**
     * In case the Record was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecordUpdateInput, RecordUncheckedUpdateInput>
  }


  /**
   * Record delete
   */
  export type RecordDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * Filter which Record to delete.
     */
    where: RecordWhereUniqueInput
  }


  /**
   * Record deleteMany
   */
  export type RecordDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Records to delete
     */
    where?: RecordWhereInput
  }


  /**
   * Record without action
   */
  export type RecordArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecordInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AddressScalarFieldEnum: {
    id: 'id',
    streetNumber: 'streetNumber',
    street: 'street',
    zip: 'zip',
    city: 'city',
    country: 'country',
    placeId: 'placeId'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const PersonScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    phone2: 'phone2',
    addressId: 'addressId'
  };

  export type PersonScalarFieldEnum = (typeof PersonScalarFieldEnum)[keyof typeof PersonScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    lang: 'lang',
    login: 'login',
    admin: 'admin',
    password: 'password',
    active: 'active',
    connexionToken: 'connexionToken',
    personId: 'personId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RequestScalarFieldEnum: {
    id: 'id',
    date: 'date',
    status: 'status',
    response: 'response'
  };

  export type RequestScalarFieldEnum = (typeof RequestScalarFieldEnum)[keyof typeof RequestScalarFieldEnum]


  export const RecordScalarFieldEnum: {
    id: 'id',
    date: 'date',
    action: 'action',
    object: 'object',
    newValue: 'newValue',
    authorId: 'authorId'
  };

  export type RecordScalarFieldEnum = (typeof RecordScalarFieldEnum)[keyof typeof RecordScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Lang'
   */
  export type EnumLangFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Lang'>
    


  /**
   * Reference to a field of type 'Lang[]'
   */
  export type ListEnumLangFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Lang[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'RequestStatus'
   */
  export type EnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus'>
    


  /**
   * Reference to a field of type 'RequestStatus[]'
   */
  export type ListEnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'RecordAction'
   */
  export type EnumRecordActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecordAction'>
    


  /**
   * Reference to a field of type 'RecordAction[]'
   */
  export type ListEnumRecordActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecordAction[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    id?: IntFilter<"Address"> | number
    streetNumber?: StringFilter<"Address"> | string
    street?: StringFilter<"Address"> | string
    zip?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    country?: StringFilter<"Address"> | string
    placeId?: StringFilter<"Address"> | string
    person?: XOR<PersonNullableRelationFilter, PersonWhereInput> | null
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    streetNumber?: SortOrder
    street?: SortOrder
    zip?: SortOrder
    city?: SortOrder
    country?: SortOrder
    placeId?: SortOrder
    person?: PersonOrderByWithRelationInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    streetNumber?: StringFilter<"Address"> | string
    street?: StringFilter<"Address"> | string
    zip?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    country?: StringFilter<"Address"> | string
    placeId?: StringFilter<"Address"> | string
    person?: XOR<PersonNullableRelationFilter, PersonWhereInput> | null
  }, "id">

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    streetNumber?: SortOrder
    street?: SortOrder
    zip?: SortOrder
    city?: SortOrder
    country?: SortOrder
    placeId?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _avg?: AddressAvgOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
    _sum?: AddressSumOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Address"> | number
    streetNumber?: StringWithAggregatesFilter<"Address"> | string
    street?: StringWithAggregatesFilter<"Address"> | string
    zip?: StringWithAggregatesFilter<"Address"> | string
    city?: StringWithAggregatesFilter<"Address"> | string
    country?: StringWithAggregatesFilter<"Address"> | string
    placeId?: StringWithAggregatesFilter<"Address"> | string
  }

  export type PersonWhereInput = {
    AND?: PersonWhereInput | PersonWhereInput[]
    OR?: PersonWhereInput[]
    NOT?: PersonWhereInput | PersonWhereInput[]
    id?: IntFilter<"Person"> | number
    firstName?: StringFilter<"Person"> | string
    lastName?: StringFilter<"Person"> | string
    email?: StringFilter<"Person"> | string
    phone?: StringNullableFilter<"Person"> | string | null
    phone2?: StringNullableFilter<"Person"> | string | null
    addressId?: IntNullableFilter<"Person"> | number | null
    address?: XOR<AddressNullableRelationFilter, AddressWhereInput> | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type PersonOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    phone2?: SortOrderInput | SortOrder
    addressId?: SortOrderInput | SortOrder
    address?: AddressOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type PersonWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    addressId?: number
    AND?: PersonWhereInput | PersonWhereInput[]
    OR?: PersonWhereInput[]
    NOT?: PersonWhereInput | PersonWhereInput[]
    firstName?: StringFilter<"Person"> | string
    lastName?: StringFilter<"Person"> | string
    email?: StringFilter<"Person"> | string
    phone?: StringNullableFilter<"Person"> | string | null
    phone2?: StringNullableFilter<"Person"> | string | null
    address?: XOR<AddressNullableRelationFilter, AddressWhereInput> | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id" | "addressId">

  export type PersonOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    phone2?: SortOrderInput | SortOrder
    addressId?: SortOrderInput | SortOrder
    _count?: PersonCountOrderByAggregateInput
    _avg?: PersonAvgOrderByAggregateInput
    _max?: PersonMaxOrderByAggregateInput
    _min?: PersonMinOrderByAggregateInput
    _sum?: PersonSumOrderByAggregateInput
  }

  export type PersonScalarWhereWithAggregatesInput = {
    AND?: PersonScalarWhereWithAggregatesInput | PersonScalarWhereWithAggregatesInput[]
    OR?: PersonScalarWhereWithAggregatesInput[]
    NOT?: PersonScalarWhereWithAggregatesInput | PersonScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Person"> | number
    firstName?: StringWithAggregatesFilter<"Person"> | string
    lastName?: StringWithAggregatesFilter<"Person"> | string
    email?: StringWithAggregatesFilter<"Person"> | string
    phone?: StringNullableWithAggregatesFilter<"Person"> | string | null
    phone2?: StringNullableWithAggregatesFilter<"Person"> | string | null
    addressId?: IntNullableWithAggregatesFilter<"Person"> | number | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    lang?: EnumLangFilter<"User"> | Lang
    login?: StringFilter<"User"> | string
    admin?: BoolFilter<"User"> | boolean
    password?: StringNullableFilter<"User"> | string | null
    active?: BoolFilter<"User"> | boolean
    connexionToken?: StringFilter<"User"> | string
    personId?: IntFilter<"User"> | number
    person?: XOR<PersonRelationFilter, PersonWhereInput>
    records?: RecordListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    lang?: SortOrder
    login?: SortOrder
    admin?: SortOrder
    password?: SortOrderInput | SortOrder
    active?: SortOrder
    connexionToken?: SortOrder
    personId?: SortOrder
    person?: PersonOrderByWithRelationInput
    records?: RecordOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    login?: string
    personId?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    lang?: EnumLangFilter<"User"> | Lang
    admin?: BoolFilter<"User"> | boolean
    password?: StringNullableFilter<"User"> | string | null
    active?: BoolFilter<"User"> | boolean
    connexionToken?: StringFilter<"User"> | string
    person?: XOR<PersonRelationFilter, PersonWhereInput>
    records?: RecordListRelationFilter
  }, "id" | "login" | "personId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    lang?: SortOrder
    login?: SortOrder
    admin?: SortOrder
    password?: SortOrderInput | SortOrder
    active?: SortOrder
    connexionToken?: SortOrder
    personId?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    lang?: EnumLangWithAggregatesFilter<"User"> | Lang
    login?: StringWithAggregatesFilter<"User"> | string
    admin?: BoolWithAggregatesFilter<"User"> | boolean
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    active?: BoolWithAggregatesFilter<"User"> | boolean
    connexionToken?: StringWithAggregatesFilter<"User"> | string
    personId?: IntWithAggregatesFilter<"User"> | number
  }

  export type RequestWhereInput = {
    AND?: RequestWhereInput | RequestWhereInput[]
    OR?: RequestWhereInput[]
    NOT?: RequestWhereInput | RequestWhereInput[]
    id?: IntFilter<"Request"> | number
    date?: DateTimeFilter<"Request"> | Date | string
    status?: EnumRequestStatusFilter<"Request"> | RequestStatus
    response?: JsonFilter<"Request">
  }

  export type RequestOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    response?: SortOrder
  }

  export type RequestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RequestWhereInput | RequestWhereInput[]
    OR?: RequestWhereInput[]
    NOT?: RequestWhereInput | RequestWhereInput[]
    date?: DateTimeFilter<"Request"> | Date | string
    status?: EnumRequestStatusFilter<"Request"> | RequestStatus
    response?: JsonFilter<"Request">
  }, "id">

  export type RequestOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    response?: SortOrder
    _count?: RequestCountOrderByAggregateInput
    _avg?: RequestAvgOrderByAggregateInput
    _max?: RequestMaxOrderByAggregateInput
    _min?: RequestMinOrderByAggregateInput
    _sum?: RequestSumOrderByAggregateInput
  }

  export type RequestScalarWhereWithAggregatesInput = {
    AND?: RequestScalarWhereWithAggregatesInput | RequestScalarWhereWithAggregatesInput[]
    OR?: RequestScalarWhereWithAggregatesInput[]
    NOT?: RequestScalarWhereWithAggregatesInput | RequestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Request"> | number
    date?: DateTimeWithAggregatesFilter<"Request"> | Date | string
    status?: EnumRequestStatusWithAggregatesFilter<"Request"> | RequestStatus
    response?: JsonWithAggregatesFilter<"Request">
  }

  export type RecordWhereInput = {
    AND?: RecordWhereInput | RecordWhereInput[]
    OR?: RecordWhereInput[]
    NOT?: RecordWhereInput | RecordWhereInput[]
    id?: IntFilter<"Record"> | number
    date?: DateTimeFilter<"Record"> | Date | string
    action?: EnumRecordActionFilter<"Record"> | RecordAction
    object?: StringFilter<"Record"> | string
    newValue?: StringFilter<"Record"> | string
    authorId?: IntFilter<"Record"> | number
    author?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type RecordOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    action?: SortOrder
    object?: SortOrder
    newValue?: SortOrder
    authorId?: SortOrder
    author?: UserOrderByWithRelationInput
  }

  export type RecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RecordWhereInput | RecordWhereInput[]
    OR?: RecordWhereInput[]
    NOT?: RecordWhereInput | RecordWhereInput[]
    date?: DateTimeFilter<"Record"> | Date | string
    action?: EnumRecordActionFilter<"Record"> | RecordAction
    object?: StringFilter<"Record"> | string
    newValue?: StringFilter<"Record"> | string
    authorId?: IntFilter<"Record"> | number
    author?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type RecordOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    action?: SortOrder
    object?: SortOrder
    newValue?: SortOrder
    authorId?: SortOrder
    _count?: RecordCountOrderByAggregateInput
    _avg?: RecordAvgOrderByAggregateInput
    _max?: RecordMaxOrderByAggregateInput
    _min?: RecordMinOrderByAggregateInput
    _sum?: RecordSumOrderByAggregateInput
  }

  export type RecordScalarWhereWithAggregatesInput = {
    AND?: RecordScalarWhereWithAggregatesInput | RecordScalarWhereWithAggregatesInput[]
    OR?: RecordScalarWhereWithAggregatesInput[]
    NOT?: RecordScalarWhereWithAggregatesInput | RecordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Record"> | number
    date?: DateTimeWithAggregatesFilter<"Record"> | Date | string
    action?: EnumRecordActionWithAggregatesFilter<"Record"> | RecordAction
    object?: StringWithAggregatesFilter<"Record"> | string
    newValue?: StringWithAggregatesFilter<"Record"> | string
    authorId?: IntWithAggregatesFilter<"Record"> | number
  }

  export type AddressCreateInput = {
    streetNumber: string
    street: string
    zip: string
    city: string
    country: string
    placeId: string
    person?: PersonCreateNestedOneWithoutAddressInput
  }

  export type AddressUncheckedCreateInput = {
    id?: number
    streetNumber: string
    street: string
    zip: string
    city: string
    country: string
    placeId: string
    person?: PersonUncheckedCreateNestedOneWithoutAddressInput
  }

  export type AddressUpdateInput = {
    streetNumber?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    placeId?: StringFieldUpdateOperationsInput | string
    person?: PersonUpdateOneWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    streetNumber?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    placeId?: StringFieldUpdateOperationsInput | string
    person?: PersonUncheckedUpdateOneWithoutAddressNestedInput
  }

  export type AddressCreateManyInput = {
    id?: number
    streetNumber: string
    street: string
    zip: string
    city: string
    country: string
    placeId: string
  }

  export type AddressUpdateManyMutationInput = {
    streetNumber?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    placeId?: StringFieldUpdateOperationsInput | string
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    streetNumber?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    placeId?: StringFieldUpdateOperationsInput | string
  }

  export type PersonCreateInput = {
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    phone2?: string | null
    address?: AddressCreateNestedOneWithoutPersonInput
    user?: UserCreateNestedOneWithoutPersonInput
  }

  export type PersonUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    phone2?: string | null
    addressId?: number | null
    user?: UserUncheckedCreateNestedOneWithoutPersonInput
  }

  export type PersonUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    address?: AddressUpdateOneWithoutPersonNestedInput
    user?: UserUpdateOneWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    addressId?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUncheckedUpdateOneWithoutPersonNestedInput
  }

  export type PersonCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    phone2?: string | null
    addressId?: number | null
  }

  export type PersonUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PersonUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    addressId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserCreateInput = {
    lang?: Lang
    login: string
    admin?: boolean
    password?: string | null
    active?: boolean
    connexionToken?: string
    person: PersonCreateNestedOneWithoutUserInput
    records?: RecordCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    lang?: Lang
    login: string
    admin?: boolean
    password?: string | null
    active?: boolean
    connexionToken?: string
    personId: number
    records?: RecordUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserUpdateInput = {
    lang?: EnumLangFieldUpdateOperationsInput | Lang
    login?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    password?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    connexionToken?: StringFieldUpdateOperationsInput | string
    person?: PersonUpdateOneRequiredWithoutUserNestedInput
    records?: RecordUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    lang?: EnumLangFieldUpdateOperationsInput | Lang
    login?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    password?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    connexionToken?: StringFieldUpdateOperationsInput | string
    personId?: IntFieldUpdateOperationsInput | number
    records?: RecordUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    lang?: Lang
    login: string
    admin?: boolean
    password?: string | null
    active?: boolean
    connexionToken?: string
    personId: number
  }

  export type UserUpdateManyMutationInput = {
    lang?: EnumLangFieldUpdateOperationsInput | Lang
    login?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    password?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    connexionToken?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    lang?: EnumLangFieldUpdateOperationsInput | Lang
    login?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    password?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    connexionToken?: StringFieldUpdateOperationsInput | string
    personId?: IntFieldUpdateOperationsInput | number
  }

  export type RequestCreateInput = {
    date?: Date | string
    status: RequestStatus
    response: JsonNullValueInput | InputJsonValue
  }

  export type RequestUncheckedCreateInput = {
    id?: number
    date?: Date | string
    status: RequestStatus
    response: JsonNullValueInput | InputJsonValue
  }

  export type RequestUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | RequestStatus
    response?: JsonNullValueInput | InputJsonValue
  }

  export type RequestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | RequestStatus
    response?: JsonNullValueInput | InputJsonValue
  }

  export type RequestCreateManyInput = {
    id?: number
    date?: Date | string
    status: RequestStatus
    response: JsonNullValueInput | InputJsonValue
  }

  export type RequestUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | RequestStatus
    response?: JsonNullValueInput | InputJsonValue
  }

  export type RequestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | RequestStatus
    response?: JsonNullValueInput | InputJsonValue
  }

  export type RecordCreateInput = {
    date?: Date | string
    action: RecordAction
    object: string
    newValue: string
    author: UserCreateNestedOneWithoutRecordsInput
  }

  export type RecordUncheckedCreateInput = {
    id?: number
    date?: Date | string
    action: RecordAction
    object: string
    newValue: string
    authorId: number
  }

  export type RecordUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: EnumRecordActionFieldUpdateOperationsInput | RecordAction
    object?: StringFieldUpdateOperationsInput | string
    newValue?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneRequiredWithoutRecordsNestedInput
  }

  export type RecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: EnumRecordActionFieldUpdateOperationsInput | RecordAction
    object?: StringFieldUpdateOperationsInput | string
    newValue?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type RecordCreateManyInput = {
    id?: number
    date?: Date | string
    action: RecordAction
    object: string
    newValue: string
    authorId: number
  }

  export type RecordUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: EnumRecordActionFieldUpdateOperationsInput | RecordAction
    object?: StringFieldUpdateOperationsInput | string
    newValue?: StringFieldUpdateOperationsInput | string
  }

  export type RecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: EnumRecordActionFieldUpdateOperationsInput | RecordAction
    object?: StringFieldUpdateOperationsInput | string
    newValue?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type PersonNullableRelationFilter = {
    is?: PersonWhereInput | null
    isNot?: PersonWhereInput | null
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    streetNumber?: SortOrder
    street?: SortOrder
    zip?: SortOrder
    city?: SortOrder
    country?: SortOrder
    placeId?: SortOrder
  }

  export type AddressAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    streetNumber?: SortOrder
    street?: SortOrder
    zip?: SortOrder
    city?: SortOrder
    country?: SortOrder
    placeId?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    streetNumber?: SortOrder
    street?: SortOrder
    zip?: SortOrder
    city?: SortOrder
    country?: SortOrder
    placeId?: SortOrder
  }

  export type AddressSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AddressNullableRelationFilter = {
    is?: AddressWhereInput | null
    isNot?: AddressWhereInput | null
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PersonCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    phone2?: SortOrder
    addressId?: SortOrder
  }

  export type PersonAvgOrderByAggregateInput = {
    id?: SortOrder
    addressId?: SortOrder
  }

  export type PersonMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    phone2?: SortOrder
    addressId?: SortOrder
  }

  export type PersonMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    phone2?: SortOrder
    addressId?: SortOrder
  }

  export type PersonSumOrderByAggregateInput = {
    id?: SortOrder
    addressId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumLangFilter<$PrismaModel = never> = {
    equals?: Lang | EnumLangFieldRefInput<$PrismaModel>
    in?: Lang[] | ListEnumLangFieldRefInput<$PrismaModel>
    notIn?: Lang[] | ListEnumLangFieldRefInput<$PrismaModel>
    not?: NestedEnumLangFilter<$PrismaModel> | Lang
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PersonRelationFilter = {
    is?: PersonWhereInput
    isNot?: PersonWhereInput
  }

  export type RecordListRelationFilter = {
    every?: RecordWhereInput
    some?: RecordWhereInput
    none?: RecordWhereInput
  }

  export type RecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    lang?: SortOrder
    login?: SortOrder
    admin?: SortOrder
    password?: SortOrder
    active?: SortOrder
    connexionToken?: SortOrder
    personId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    lang?: SortOrder
    login?: SortOrder
    admin?: SortOrder
    password?: SortOrder
    active?: SortOrder
    connexionToken?: SortOrder
    personId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    lang?: SortOrder
    login?: SortOrder
    admin?: SortOrder
    password?: SortOrder
    active?: SortOrder
    connexionToken?: SortOrder
    personId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
  }

  export type EnumLangWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Lang | EnumLangFieldRefInput<$PrismaModel>
    in?: Lang[] | ListEnumLangFieldRefInput<$PrismaModel>
    notIn?: Lang[] | ListEnumLangFieldRefInput<$PrismaModel>
    not?: NestedEnumLangWithAggregatesFilter<$PrismaModel> | Lang
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLangFilter<$PrismaModel>
    _max?: NestedEnumLangFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | RequestStatus
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type RequestCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    response?: SortOrder
  }

  export type RequestAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RequestMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    status?: SortOrder
  }

  export type RequestMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    status?: SortOrder
  }

  export type RequestSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumRecordActionFilter<$PrismaModel = never> = {
    equals?: RecordAction | EnumRecordActionFieldRefInput<$PrismaModel>
    in?: RecordAction[] | ListEnumRecordActionFieldRefInput<$PrismaModel>
    notIn?: RecordAction[] | ListEnumRecordActionFieldRefInput<$PrismaModel>
    not?: NestedEnumRecordActionFilter<$PrismaModel> | RecordAction
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RecordCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    action?: SortOrder
    object?: SortOrder
    newValue?: SortOrder
    authorId?: SortOrder
  }

  export type RecordAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type RecordMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    action?: SortOrder
    object?: SortOrder
    newValue?: SortOrder
    authorId?: SortOrder
  }

  export type RecordMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    action?: SortOrder
    object?: SortOrder
    newValue?: SortOrder
    authorId?: SortOrder
  }

  export type RecordSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type EnumRecordActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: RecordAction | EnumRecordActionFieldRefInput<$PrismaModel>
    in?: RecordAction[] | ListEnumRecordActionFieldRefInput<$PrismaModel>
    notIn?: RecordAction[] | ListEnumRecordActionFieldRefInput<$PrismaModel>
    not?: NestedEnumRecordActionWithAggregatesFilter<$PrismaModel> | RecordAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecordActionFilter<$PrismaModel>
    _max?: NestedEnumRecordActionFilter<$PrismaModel>
  }

  export type PersonCreateNestedOneWithoutAddressInput = {
    create?: XOR<PersonCreateWithoutAddressInput, PersonUncheckedCreateWithoutAddressInput>
    connectOrCreate?: PersonCreateOrConnectWithoutAddressInput
    connect?: PersonWhereUniqueInput
  }

  export type PersonUncheckedCreateNestedOneWithoutAddressInput = {
    create?: XOR<PersonCreateWithoutAddressInput, PersonUncheckedCreateWithoutAddressInput>
    connectOrCreate?: PersonCreateOrConnectWithoutAddressInput
    connect?: PersonWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type PersonUpdateOneWithoutAddressNestedInput = {
    create?: XOR<PersonCreateWithoutAddressInput, PersonUncheckedCreateWithoutAddressInput>
    connectOrCreate?: PersonCreateOrConnectWithoutAddressInput
    upsert?: PersonUpsertWithoutAddressInput
    disconnect?: PersonWhereInput | boolean
    delete?: PersonWhereInput | boolean
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutAddressInput, PersonUpdateWithoutAddressInput>, PersonUncheckedUpdateWithoutAddressInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PersonUncheckedUpdateOneWithoutAddressNestedInput = {
    create?: XOR<PersonCreateWithoutAddressInput, PersonUncheckedCreateWithoutAddressInput>
    connectOrCreate?: PersonCreateOrConnectWithoutAddressInput
    upsert?: PersonUpsertWithoutAddressInput
    disconnect?: PersonWhereInput | boolean
    delete?: PersonWhereInput | boolean
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutAddressInput, PersonUpdateWithoutAddressInput>, PersonUncheckedUpdateWithoutAddressInput>
  }

  export type AddressCreateNestedOneWithoutPersonInput = {
    create?: XOR<AddressCreateWithoutPersonInput, AddressUncheckedCreateWithoutPersonInput>
    connectOrCreate?: AddressCreateOrConnectWithoutPersonInput
    connect?: AddressWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPersonInput = {
    create?: XOR<UserCreateWithoutPersonInput, UserUncheckedCreateWithoutPersonInput>
    connectOrCreate?: UserCreateOrConnectWithoutPersonInput
    connect?: UserWhereUniqueInput
  }

  export type UserUncheckedCreateNestedOneWithoutPersonInput = {
    create?: XOR<UserCreateWithoutPersonInput, UserUncheckedCreateWithoutPersonInput>
    connectOrCreate?: UserCreateOrConnectWithoutPersonInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AddressUpdateOneWithoutPersonNestedInput = {
    create?: XOR<AddressCreateWithoutPersonInput, AddressUncheckedCreateWithoutPersonInput>
    connectOrCreate?: AddressCreateOrConnectWithoutPersonInput
    upsert?: AddressUpsertWithoutPersonInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutPersonInput, AddressUpdateWithoutPersonInput>, AddressUncheckedUpdateWithoutPersonInput>
  }

  export type UserUpdateOneWithoutPersonNestedInput = {
    create?: XOR<UserCreateWithoutPersonInput, UserUncheckedCreateWithoutPersonInput>
    connectOrCreate?: UserCreateOrConnectWithoutPersonInput
    upsert?: UserUpsertWithoutPersonInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPersonInput, UserUpdateWithoutPersonInput>, UserUncheckedUpdateWithoutPersonInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUncheckedUpdateOneWithoutPersonNestedInput = {
    create?: XOR<UserCreateWithoutPersonInput, UserUncheckedCreateWithoutPersonInput>
    connectOrCreate?: UserCreateOrConnectWithoutPersonInput
    upsert?: UserUpsertWithoutPersonInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPersonInput, UserUpdateWithoutPersonInput>, UserUncheckedUpdateWithoutPersonInput>
  }

  export type PersonCreateNestedOneWithoutUserInput = {
    create?: XOR<PersonCreateWithoutUserInput, PersonUncheckedCreateWithoutUserInput>
    connectOrCreate?: PersonCreateOrConnectWithoutUserInput
    connect?: PersonWhereUniqueInput
  }

  export type RecordCreateNestedManyWithoutAuthorInput = {
    create?: XOR<RecordCreateWithoutAuthorInput, RecordUncheckedCreateWithoutAuthorInput> | RecordCreateWithoutAuthorInput[] | RecordUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: RecordCreateOrConnectWithoutAuthorInput | RecordCreateOrConnectWithoutAuthorInput[]
    createMany?: RecordCreateManyAuthorInputEnvelope
    connect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
  }

  export type RecordUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<RecordCreateWithoutAuthorInput, RecordUncheckedCreateWithoutAuthorInput> | RecordCreateWithoutAuthorInput[] | RecordUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: RecordCreateOrConnectWithoutAuthorInput | RecordCreateOrConnectWithoutAuthorInput[]
    createMany?: RecordCreateManyAuthorInputEnvelope
    connect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
  }

  export type EnumLangFieldUpdateOperationsInput = {
    set?: Lang
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PersonUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<PersonCreateWithoutUserInput, PersonUncheckedCreateWithoutUserInput>
    connectOrCreate?: PersonCreateOrConnectWithoutUserInput
    upsert?: PersonUpsertWithoutUserInput
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutUserInput, PersonUpdateWithoutUserInput>, PersonUncheckedUpdateWithoutUserInput>
  }

  export type RecordUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<RecordCreateWithoutAuthorInput, RecordUncheckedCreateWithoutAuthorInput> | RecordCreateWithoutAuthorInput[] | RecordUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: RecordCreateOrConnectWithoutAuthorInput | RecordCreateOrConnectWithoutAuthorInput[]
    upsert?: RecordUpsertWithWhereUniqueWithoutAuthorInput | RecordUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: RecordCreateManyAuthorInputEnvelope
    set?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    disconnect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    delete?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    connect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    update?: RecordUpdateWithWhereUniqueWithoutAuthorInput | RecordUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: RecordUpdateManyWithWhereWithoutAuthorInput | RecordUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: RecordScalarWhereInput | RecordScalarWhereInput[]
  }

  export type RecordUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<RecordCreateWithoutAuthorInput, RecordUncheckedCreateWithoutAuthorInput> | RecordCreateWithoutAuthorInput[] | RecordUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: RecordCreateOrConnectWithoutAuthorInput | RecordCreateOrConnectWithoutAuthorInput[]
    upsert?: RecordUpsertWithWhereUniqueWithoutAuthorInput | RecordUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: RecordCreateManyAuthorInputEnvelope
    set?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    disconnect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    delete?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    connect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    update?: RecordUpdateWithWhereUniqueWithoutAuthorInput | RecordUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: RecordUpdateManyWithWhereWithoutAuthorInput | RecordUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: RecordScalarWhereInput | RecordScalarWhereInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumRequestStatusFieldUpdateOperationsInput = {
    set?: RequestStatus
  }

  export type UserCreateNestedOneWithoutRecordsInput = {
    create?: XOR<UserCreateWithoutRecordsInput, UserUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecordsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumRecordActionFieldUpdateOperationsInput = {
    set?: RecordAction
  }

  export type UserUpdateOneRequiredWithoutRecordsNestedInput = {
    create?: XOR<UserCreateWithoutRecordsInput, UserUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecordsInput
    upsert?: UserUpsertWithoutRecordsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRecordsInput, UserUpdateWithoutRecordsInput>, UserUncheckedUpdateWithoutRecordsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumLangFilter<$PrismaModel = never> = {
    equals?: Lang | EnumLangFieldRefInput<$PrismaModel>
    in?: Lang[] | ListEnumLangFieldRefInput<$PrismaModel>
    notIn?: Lang[] | ListEnumLangFieldRefInput<$PrismaModel>
    not?: NestedEnumLangFilter<$PrismaModel> | Lang
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumLangWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Lang | EnumLangFieldRefInput<$PrismaModel>
    in?: Lang[] | ListEnumLangFieldRefInput<$PrismaModel>
    notIn?: Lang[] | ListEnumLangFieldRefInput<$PrismaModel>
    not?: NestedEnumLangWithAggregatesFilter<$PrismaModel> | Lang
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLangFilter<$PrismaModel>
    _max?: NestedEnumLangFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | RequestStatus
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumRecordActionFilter<$PrismaModel = never> = {
    equals?: RecordAction | EnumRecordActionFieldRefInput<$PrismaModel>
    in?: RecordAction[] | ListEnumRecordActionFieldRefInput<$PrismaModel>
    notIn?: RecordAction[] | ListEnumRecordActionFieldRefInput<$PrismaModel>
    not?: NestedEnumRecordActionFilter<$PrismaModel> | RecordAction
  }

  export type NestedEnumRecordActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: RecordAction | EnumRecordActionFieldRefInput<$PrismaModel>
    in?: RecordAction[] | ListEnumRecordActionFieldRefInput<$PrismaModel>
    notIn?: RecordAction[] | ListEnumRecordActionFieldRefInput<$PrismaModel>
    not?: NestedEnumRecordActionWithAggregatesFilter<$PrismaModel> | RecordAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecordActionFilter<$PrismaModel>
    _max?: NestedEnumRecordActionFilter<$PrismaModel>
  }

  export type PersonCreateWithoutAddressInput = {
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    phone2?: string | null
    user?: UserCreateNestedOneWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutAddressInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    phone2?: string | null
    user?: UserUncheckedCreateNestedOneWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutAddressInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutAddressInput, PersonUncheckedCreateWithoutAddressInput>
  }

  export type PersonUpsertWithoutAddressInput = {
    update: XOR<PersonUpdateWithoutAddressInput, PersonUncheckedUpdateWithoutAddressInput>
    create: XOR<PersonCreateWithoutAddressInput, PersonUncheckedCreateWithoutAddressInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutAddressInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutAddressInput, PersonUncheckedUpdateWithoutAddressInput>
  }

  export type PersonUpdateWithoutAddressInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUncheckedUpdateOneWithoutPersonNestedInput
  }

  export type AddressCreateWithoutPersonInput = {
    streetNumber: string
    street: string
    zip: string
    city: string
    country: string
    placeId: string
  }

  export type AddressUncheckedCreateWithoutPersonInput = {
    id?: number
    streetNumber: string
    street: string
    zip: string
    city: string
    country: string
    placeId: string
  }

  export type AddressCreateOrConnectWithoutPersonInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutPersonInput, AddressUncheckedCreateWithoutPersonInput>
  }

  export type UserCreateWithoutPersonInput = {
    lang?: Lang
    login: string
    admin?: boolean
    password?: string | null
    active?: boolean
    connexionToken?: string
    records?: RecordCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutPersonInput = {
    id?: number
    lang?: Lang
    login: string
    admin?: boolean
    password?: string | null
    active?: boolean
    connexionToken?: string
    records?: RecordUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutPersonInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPersonInput, UserUncheckedCreateWithoutPersonInput>
  }

  export type AddressUpsertWithoutPersonInput = {
    update: XOR<AddressUpdateWithoutPersonInput, AddressUncheckedUpdateWithoutPersonInput>
    create: XOR<AddressCreateWithoutPersonInput, AddressUncheckedCreateWithoutPersonInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutPersonInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutPersonInput, AddressUncheckedUpdateWithoutPersonInput>
  }

  export type AddressUpdateWithoutPersonInput = {
    streetNumber?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    placeId?: StringFieldUpdateOperationsInput | string
  }

  export type AddressUncheckedUpdateWithoutPersonInput = {
    id?: IntFieldUpdateOperationsInput | number
    streetNumber?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    placeId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutPersonInput = {
    update: XOR<UserUpdateWithoutPersonInput, UserUncheckedUpdateWithoutPersonInput>
    create: XOR<UserCreateWithoutPersonInput, UserUncheckedCreateWithoutPersonInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPersonInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPersonInput, UserUncheckedUpdateWithoutPersonInput>
  }

  export type UserUpdateWithoutPersonInput = {
    lang?: EnumLangFieldUpdateOperationsInput | Lang
    login?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    password?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    connexionToken?: StringFieldUpdateOperationsInput | string
    records?: RecordUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutPersonInput = {
    id?: IntFieldUpdateOperationsInput | number
    lang?: EnumLangFieldUpdateOperationsInput | Lang
    login?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    password?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    connexionToken?: StringFieldUpdateOperationsInput | string
    records?: RecordUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type PersonCreateWithoutUserInput = {
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    phone2?: string | null
    address?: AddressCreateNestedOneWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutUserInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    phone2?: string | null
    addressId?: number | null
  }

  export type PersonCreateOrConnectWithoutUserInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutUserInput, PersonUncheckedCreateWithoutUserInput>
  }

  export type RecordCreateWithoutAuthorInput = {
    date?: Date | string
    action: RecordAction
    object: string
    newValue: string
  }

  export type RecordUncheckedCreateWithoutAuthorInput = {
    id?: number
    date?: Date | string
    action: RecordAction
    object: string
    newValue: string
  }

  export type RecordCreateOrConnectWithoutAuthorInput = {
    where: RecordWhereUniqueInput
    create: XOR<RecordCreateWithoutAuthorInput, RecordUncheckedCreateWithoutAuthorInput>
  }

  export type RecordCreateManyAuthorInputEnvelope = {
    data: RecordCreateManyAuthorInput | RecordCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type PersonUpsertWithoutUserInput = {
    update: XOR<PersonUpdateWithoutUserInput, PersonUncheckedUpdateWithoutUserInput>
    create: XOR<PersonCreateWithoutUserInput, PersonUncheckedCreateWithoutUserInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutUserInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutUserInput, PersonUncheckedUpdateWithoutUserInput>
  }

  export type PersonUpdateWithoutUserInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    address?: AddressUpdateOneWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    addressId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RecordUpsertWithWhereUniqueWithoutAuthorInput = {
    where: RecordWhereUniqueInput
    update: XOR<RecordUpdateWithoutAuthorInput, RecordUncheckedUpdateWithoutAuthorInput>
    create: XOR<RecordCreateWithoutAuthorInput, RecordUncheckedCreateWithoutAuthorInput>
  }

  export type RecordUpdateWithWhereUniqueWithoutAuthorInput = {
    where: RecordWhereUniqueInput
    data: XOR<RecordUpdateWithoutAuthorInput, RecordUncheckedUpdateWithoutAuthorInput>
  }

  export type RecordUpdateManyWithWhereWithoutAuthorInput = {
    where: RecordScalarWhereInput
    data: XOR<RecordUpdateManyMutationInput, RecordUncheckedUpdateManyWithoutAuthorInput>
  }

  export type RecordScalarWhereInput = {
    AND?: RecordScalarWhereInput | RecordScalarWhereInput[]
    OR?: RecordScalarWhereInput[]
    NOT?: RecordScalarWhereInput | RecordScalarWhereInput[]
    id?: IntFilter<"Record"> | number
    date?: DateTimeFilter<"Record"> | Date | string
    action?: EnumRecordActionFilter<"Record"> | RecordAction
    object?: StringFilter<"Record"> | string
    newValue?: StringFilter<"Record"> | string
    authorId?: IntFilter<"Record"> | number
  }

  export type UserCreateWithoutRecordsInput = {
    lang?: Lang
    login: string
    admin?: boolean
    password?: string | null
    active?: boolean
    connexionToken?: string
    person: PersonCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRecordsInput = {
    id?: number
    lang?: Lang
    login: string
    admin?: boolean
    password?: string | null
    active?: boolean
    connexionToken?: string
    personId: number
  }

  export type UserCreateOrConnectWithoutRecordsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRecordsInput, UserUncheckedCreateWithoutRecordsInput>
  }

  export type UserUpsertWithoutRecordsInput = {
    update: XOR<UserUpdateWithoutRecordsInput, UserUncheckedUpdateWithoutRecordsInput>
    create: XOR<UserCreateWithoutRecordsInput, UserUncheckedCreateWithoutRecordsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRecordsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRecordsInput, UserUncheckedUpdateWithoutRecordsInput>
  }

  export type UserUpdateWithoutRecordsInput = {
    lang?: EnumLangFieldUpdateOperationsInput | Lang
    login?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    password?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    connexionToken?: StringFieldUpdateOperationsInput | string
    person?: PersonUpdateOneRequiredWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    lang?: EnumLangFieldUpdateOperationsInput | Lang
    login?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    password?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    connexionToken?: StringFieldUpdateOperationsInput | string
    personId?: IntFieldUpdateOperationsInput | number
  }

  export type RecordCreateManyAuthorInput = {
    id?: number
    date?: Date | string
    action: RecordAction
    object: string
    newValue: string
  }

  export type RecordUpdateWithoutAuthorInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: EnumRecordActionFieldUpdateOperationsInput | RecordAction
    object?: StringFieldUpdateOperationsInput | string
    newValue?: StringFieldUpdateOperationsInput | string
  }

  export type RecordUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: EnumRecordActionFieldUpdateOperationsInput | RecordAction
    object?: StringFieldUpdateOperationsInput | string
    newValue?: StringFieldUpdateOperationsInput | string
  }

  export type RecordUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: EnumRecordActionFieldUpdateOperationsInput | RecordAction
    object?: StringFieldUpdateOperationsInput | string
    newValue?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
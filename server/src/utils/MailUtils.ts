import { Person, User } from '@fullstack-typescript-monorepo/prisma';
import { createTransport } from 'nodemailer';

/**
 * Password Reset HTML Template
 * @param url
 * @param message
 */
const passwordResetTemplate = (url: string, message: string) => /* html */`<!DOCTYPE html>
<html lang="en-US">
<head>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
<title>Reset Password Email</title>
<meta name="description" content="Reset Password Email Template." />
<style type="text/css">
a:hover {
text-decoration: underline !important;
}
</style>
</head>
<body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
<!--100% body table-->
<table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
style="@import url(https://fonts.googleapis.com/css?family=Rubik:300, 400, 500, 700|Open + Sans:300, 400, 600, 700); font-family: 'Open Sans', sans-serif;">
<tr>
<td>
<table style="background-color: #f2f3f8; max-width: 670px; margin: 0 auto;" width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
<tr>
<td style="height: 80px;">&nbsp;</td>
</tr>
<tr>
<td style="text-align: center;">
<img width="95%" max-width="670" style="-webkit-box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06); -moz-box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06); box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);" src="data:image/jpeg;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4Ljk4IDguNDkiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojNzBhNmM0O30uY2xzLTJ7ZmlsbDojZTU0YzQ0O30uY2xzLTN7ZmlsbDojZWRiNTYxO308L3N0eWxlPjwvZGVmcz48ZyBpZD0iQ2FscXVlXzIiIGRhdGEtbmFtZT0iQ2FscXVlIDIiPjxnIGlkPSJDYWxxdWVfMS0yIiBkYXRhLW5hbWU9IkNhbHF1ZSAxIj48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iMCAxLjk0IDQuNjUgMS45NCA0LjY1IDQuMjIgMS42MSA0LjIyIDAgMS45NCIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSI0LjY1IDQuMjEgMS42MSA0LjIxIDQuNjUgOC40OCA0LjY1IDQuMjEiLz48cG9seWdvbiBjbGFzcz0iY2xzLTMiIHBvaW50cz0iNC42NSAxLjk0IDguOTcgMS45NCA0LjY1IDguNDkgNC42NSAxLjk0Ii8+PHBvbHlnb24gY2xhc3M9ImNscy0yIiBwb2ludHM9IjIuMTEgMCAwIDEuOTUgNi45MiAxLjk1IDYuOTIgMCAyLjExIDAiLz48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iNi45MiAwIDYuOTIgMS45NSA4Ljk4IDEuOTUgNi45MiAwIi8+PC9nPjwvZz48L3N2Zz4NCg==" title="logo" alt="logo" />
</td>
</tr>
<tr>
<td style="height: 20px;">&nbsp;</td>
</tr>
<tr>
<td>
<table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" style=" max-width: 670px; background: #fff; border-radius: 3px;
text-align: center; -webkit-box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06); -moz-box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06); box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);">
<tr>
<td style="height: 40px;">&nbsp;</td>
</tr>
<tr>
<td style="padding: 0 35px;">
<h1 style="color: #1e1e2d; font-weight: 500; margin: 0; font-size: 32px; font-family: 'Rubik', sans-serif;">You have requested to reset your password</h1>
<span style="display: inline-block; vertical-align: middle; margin: 29px 0 26px; border-bottom: 1px solid #cecece; width: 100px;"></span>
<p style="color: #455056; font-size: 15px; line-height: 24px; margin: 0;">
We cannot simply send you your old password. A unique link to reset your password has been generated for you. To reset your password, click the following button and follow the instructions.
</p>
<a href="${url}" style=" background: #3f51b5; text-decoration: none !important; font-weight: 500; margin-top: 35px; color: #fff;
text-transform: uppercase; font-size: 14px; padding: 10px 24px; display: inline-block; border-radius: 50px; ">
Reset Password
</a>
<br/>
<span style="height: 40px;">&nbsp;</span>
<p style="color: #455056; font-size: 15px; line-height: 24px; margin: 0;">
${message} :
<a href="${url}">${url}</a>
</p>
</td>
</tr>
<tr>
<td style="height: 40px;">&nbsp;</td>
</tr>
</table>
</td>
</tr>
<tr>
<td style="height: 20px;">&nbsp;</td>
</tr>
<tr>
<td style="height: 80px;">&nbsp;</td>
</tr>
</table>
</td>
</tr>
</table>
<!--/100% body table-->
</body>
</html>`;

const sendPasswordResetMail = async (
  user: User & { person: Person },
  url: string,
  message: string,
) => {
  // Create mail transporter
  const transporter = createTransport({
    host: 'ssl0.ovh.net',
    port: 465,
    secure: true,
    auth: {
      user: 'noreply@sostag.fr',
      pass: '',
    },
  });

  // Check connection
  const connected = await transporter.verify();

  if (!connected) {
    throw new Error('Unable to connect to mail server');
  }

  // Send mail
  await transporter.sendMail({
    from: 'noreply@sostag.fr',
    to: user.person.email,
    subject: 'Reset your password, Easy Bill',
    text: `Click the following link to reset your password: ${url}`,
    html: passwordResetTemplate(url, message),
  });
};

export default {
  sendPasswordResetMail,
};
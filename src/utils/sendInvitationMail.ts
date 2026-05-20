import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendInvitationMail = async (
  fullName: string,
  email: string
) => {
  await transporter.sendMail({
    from: `"KVR Flight Restaurant ✈️" <${process.env.EMAIL_USER}>`,

    to: email,

    subject:
      "✈️ Welcome to KVR Flight Restaurant",

    html: `
      <div
        style="
          font-family:Arial;
          max-width:600px;
          margin:auto;
          padding:30px;
          border-radius:20px;
          background:#111827;
          color:white;
        "
      >
        <h1 style="color:#facc15;">
          Welcome Aboard ✈️
        </h1>

        <h2>
          Hello ${fullName},
        </h2>

        <p>
          Thank you for joining
          <strong>
            KVR Flight Restaurant
          </strong>
        </p>

        <p>
          Enjoy our unique
          flight-themed dining
          experience.
        </p>

        <ul>
          <li>
            Daily Special Foods
          </li>

          <li>
            Exclusive Offers
          </li>

          <li>
            Premium Flight Dining
          </li>
        </ul>

        <p>
          We look forward to
          welcoming you 🍽
        </p>

        <hr />

        <small>
          KVR Flight Restaurant
        </small>
      </div>
    `,
  });
};
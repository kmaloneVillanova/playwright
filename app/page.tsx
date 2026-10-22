import Image from "next/image";

export default function RegisterPage() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>Register Here</h1>
      <form>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            style={{ border: "1px solid black", padding: "4px" }}
          />
        </div>

        <br />

        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            style={{ border: "1px solid black", padding: "4px" }}
          />
        </div>
      </form>
    </main>
  );
}




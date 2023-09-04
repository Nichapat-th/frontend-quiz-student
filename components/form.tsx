// import { API_URL } from "@/utils/api";
import { useState } from "react";
import { Input, Button, Card, Title, Stack } from "@mantine/core";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const donationData = {
      firstName,
      lastName,
      email,
      amount,
    };
    try {
      const response = await fetch(
        "https://donation-server-production.up.railway.app/donate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(donationData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit donation.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    fetch("https://donation-server-production.up.railway.app/donate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // ... your form data ...
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // ... handle the response, maybe show a success message ...
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
      });
  };
  return (
    <Card withBorder shadow="xs" p="xl" bg="cyan.2">
      <Title order={1} color="blue">
        Donate
      </Title>

      <form>
        <Stack spacing={"xs"}>
          <Input.Wrapper>
            <Input.Label>First Name</Input.Label>
            <Input />
            <Input.Error>{/* Error goes here */}</Input.Error>
          </Input.Wrapper>

          <Input.Wrapper>
            <Input.Label>Last Name</Input.Label>
            <Input />
            <Input.Error>{/* Error goes here */}</Input.Error>
          </Input.Wrapper>

          <Input.Wrapper>
            <Input.Label>Email</Input.Label>
            <Input />
            <Input.Error>{/* Error goes here */}</Input.Error>
          </Input.Wrapper>

          <Input.Wrapper>
            <Input.Label>Donation Amount</Input.Label>
            <Input />
            <Input.Error>{/* Error goes here */}</Input.Error>
          </Input.Wrapper>
          <Button>Submit</Button>
        </Stack>
      </form>
    </Card>
  );
}

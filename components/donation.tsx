// import { API_URL } from "../utils/api";
// import { type Donation } from "@/utils/types";
import { useState, useEffect } from "react";
import { Paper, Text, Stack, Group, Title, Card } from "@mantine/core";
import dayjs from "dayjs";

type DonationType = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  amount: number;
  time: string;
};

export default function Donation() {
  const [donations, setDonations] = useState<DonationType[]>([]);

  useEffect(() => {
    fetch("https://donation-server-production.up.railway.app/donation")
      .then((response) => response.json())
      .then((data) => {
        setDonations(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <Card withBorder shadow="xs" bg="gray.3">
      <Group mb={20}>
        <Title order={1} color="gray">
          Total
        </Title>
        <Title order={1} variant="gradient">
          10000
        </Title>
        <Title order={1} color="gray">
          THB
        </Title>
      </Group>
      <Stack>
        {donations.map((donation) => (
          <Paper key={donation.id} shadow="xs" p="md">
            <Group>
              <Text>{donation.firstName}</Text>
              <Text>{donation.lastName}</Text>
              <Text>{donation.email}</Text>
              <Text>{donation.amount}</Text>
              <Text>{dayjs(donation.time).format("D-MMM HH:mm:ss")}</Text>
            </Group>
          </Paper>
        ))}
      </Stack>
    </Card>
  );
}

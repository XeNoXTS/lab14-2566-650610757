"use client";
import {
  Button,
  Container,
  Divider,
  Group,
  Pagination,
  Rating,
  Text,
  Textarea,
  Title,
} from "@mantine/core";
import { useState } from "react";

export default function FoodReviewPage() {
  const [value, setValue] = useState(0);
  const [activePage, setPage] = useState(1);

  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      <Title order={4} mt="sm">
        Your rating
      </Title>
      <Rating size="lg" value={value} onChange={setValue} />
      <Textarea
        placeholder="Do you enjoy eating?"
        label="Your review"
        mt="xs"
        size="sm"
        minRows={3}
      />
      <Button color="orange" mt="xs">
        Submit Review
      </Button>
      <Divider my="sm" />
      <Group position="center">
        <Title order={4}>Elon Musk</Title>
        <Rating value={5} readOnly />
      </Group>
      <Text align="center" color="dimmed">
        Best pizza in this world. I give you X score.
      </Text>
      <Divider my="sm" />
      <Group position="center">
        <Title order={4}>Mark Zuck</Title>
        <Rating value={4} readOnly />
      </Group>
      <Text align="center" color="dimmed">
        My favourite part is pepperoni
      </Text>
      <Pagination
        position="center"
        color="orange"
        value={activePage}
        onChange={setPage}
        total={20}
        mt="md"
      />

      <Text align="center" color="dimmed" my="sm">
        Copyright © 2023 Yannawut Yunvisate 650610757
      </Text>
    </Container>
  );
}

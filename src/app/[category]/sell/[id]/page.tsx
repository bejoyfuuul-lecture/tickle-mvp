import { db } from "@/lib/kysely";

import Container from "@/layouts/Container";
import { SellDetail } from "@/components/front/item/SellDetail";

interface ItemPageProps {
  params: {
    category: string;
    id: string;
  };
}

export default async function ItemPage({ params }: ItemPageProps) {
  const { category, id } = params;
  const item = await db.selectFrom("Ticket").selectAll().where("Ticket.id", "=", id).execute();
  console.log(item);
  return (
    <Container type="main" subType="section">
      <SellDetail item={item[0]} />
    </Container>
  );
}
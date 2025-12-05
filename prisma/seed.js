const { PrismaClient } = require("@prisma/client");
const data = require("./products.json");
const prisma = new PrismaClient();

async function main() {
  const clerkId = "user_366XWE7DeStWm1O342UFLiQafLV";
  const products = data.map((product) => {
    return {
      ...product,
      clerkId,
    };
  });
  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

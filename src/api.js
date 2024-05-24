export async function getBestProducts({
  page = 1,
  pageSize = 4,
  orderBy = "favorite",
}) {
  try {
    const params = new URLSearchParams({
      page: page.toString(),
      pageSize: pageSize.toString(),
      orderBy,
    });

    const response = await fetch(
      `https://panda-market-api.vercel.app/products?${params}`
    );

    if (!response.ok) {
      throw new Error("리스트를 불러오는데 실패했습니다");
    }

    const result = await response.json();
    console.log("bestItems", result);
    return result;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function getAllProducts({
  allPage = 1,
  pageSize = 10,
  orderBy = "recent",
}) {
  try {
    const query = `page=${allPage}&pageSize=${pageSize}&orderBy=${orderBy}`;

    const response = await fetch(
      `https://panda-market-api.vercel.app/products?${query}`
    );

    if (!response.ok) {
      throw new Error("리스트를 불러오는데 실패했습니다");
    }

    const result = await response.json();
    console.log("allItems", result);
    return result;
  } catch (error) {
    console.error("Error:", error);
  }
}

// export async function getProductsDetail({ productId }) {
//   try {
//     const response = await fetch(
//       `https://panda-market-api.vercel.app/products/${productId}`
//     );
//     if (!response.ok) {
//       throw new Error("상품 상세 조회를 불러오는데 실패했습니다");
//     }
//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.error("Error:", error);
//     throw error;
//   }
// }

export async function getProductsComments({ productId }) {
  try {
    const response = await fetch(
      `https://panda-market-api.vercel.app/products/${productId}/comments?limit=5`
    );

    if (!response.ok) {
      throw new Error("상품 댓글을 불러오는데 실패했습니다");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

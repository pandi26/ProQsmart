export function buildTree(data) {
  const tree = {};

  data.forEach(row => {
    const {
      Category,
      "Sub Category 1": sub1,
      "Sub Category 2": sub2,
      "Item Code": itemCode,
      Description,
      Quantity,
      Rate
    } = row;

    if (!tree[Category]) tree[Category] = {};
    if (!tree[Category][sub1]) tree[Category][sub1] = {};
    if (!tree[Category][sub1][sub2]) tree[Category][sub1][sub2] = [];

    tree[Category][sub1][sub2].push({
      itemCode,
      Description,
      Quantity,
      Rate
    });
  });

  return tree;
}

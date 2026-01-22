import TreeRow from "./TreeRow";
import { buildTree } from "../utils/buildTree";

export default function TreeTable({ data }) {
  const tree = buildTree(data);

  return (
    <table border="1" cellPadding="8" width="100%">
      <thead>
        <tr>
          <th>Hierarchy</th>
        </tr>
      </thead>

      <tbody>
        {Object.entries(tree).map(([category, sub1Obj]) => (
          <TreeRow key={category} label={category} level={0}>
            {Object.entries(sub1Obj).map(([sub1, sub2Obj]) => (
              <TreeRow key={sub1} label={sub1} level={1}>
                {Object.entries(sub2Obj).map(([sub2, items]) => (
                  <TreeRow key={sub2} label={sub2} level={2}>
                    {items.map((item, i) => (
                      <tr key={i}>
                        <td style={{ paddingLeft: 60 }}>
                          {item.itemCode} | Qty: {item.Quantity} | Rate: {item.Rate}
                        </td>
                      </tr>
                    ))}
                  </TreeRow>
                ))}
              </TreeRow>
            ))}
          </TreeRow>
        ))}
      </tbody>
    </table>
  );
}

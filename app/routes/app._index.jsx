import { useLoaderData } from "react-router";
import { authenticate } from "../shopify.server";

export const loader = async ({ request }) => {
  await authenticate.admin(request);
  const performanceData = {
    adSpend: { value: "$5,250.00", avg: "Avg/day $775.00", change: -16 },
    purchases: { value: "117", avg: "Avg/day 8", change: -23 },
    revenue: { value: "$25,200.00", avg: "Avg/day $1,800.00", change: -33 },
    netProfit: { value: "$4,031.00", avg: "Avg/day $397.93", change: 38 },
  };
  return new Response(JSON.stringify(performanceData), {
    headers: { "Content-Type": "application/json" },
  });
};

export default function Index() {
  const data = useLoaderData();

  const KpiChange = ({ change }) => {
    // ... (KpiChange fonksiyonunun içeriği aynı kalır)
    const isPositive = change >= 0;
    const tone = isPositive ? "positive" : "negative";
    const icon = isPositive ? "arrow-up" : "arrow-down";

    return (
      <s-flex gap="1" align="center" style={{ marginTop: '4px' }}>
        <s-icon name={icon} tone={tone}></s-icon>
        <s-text tone={tone} size="small">{Math.abs(change)}%</s-text>
      </s-flex>
    );
  };

  return (
    <s-page>
      <s-section heading="Company Profile" padding="base">
        <s-paragraph>This is your main company record. Each website can override its fields.</s-paragraph>
        <s-divider class="custom-space" />
        <s-form
          onSubmit={(event) => {
            event.waitUntil(fetch('app:save/data'));

          }}
          onReset={() => console.log('automatically reset values')}
        >
          <s-grid gridTemplateColumns="repeat(2, 1fr)"
            gap="small"
            justifyContent="center"
          >
            <s-grid-item>
              <s-text-field
                label="Company Name"
                name="my-text"
          
              />
            </s-grid-item>

            <s-grid-item>
              <s-number-field
                label="Tax / VAT ID"
                name="my-text"
          
              />
            </s-grid-item>
          </s-grid>
    
        </s-form>
      </s-section>
    </s-page>
  );
}
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
      {/* ... (return bloğunun geri kalanı olduğu gibi kalır) ... */}
      <s-layout-block>
        <s-flex justify="space-between" align="center">
          <s-heading element="h1">Welcome back 👋</s-heading>
          <s-flex gap="3">
            <s-button>Open Support</s-button>
            <s-button variant="primary">Start Designing</s-button>
          </s-flex>
        </s-flex>
      </s-layout-block>

      <s-layout-block>
        <s-card>
          <s-card-header>
            <s-flex justify="space-between" align="center">
              <s-heading>Performance (All Orders)</s-heading>
              <s-button-group>
                <s-button pressed>7d</s-button>
                <s-button>30d</s-button>
                <s-button>90d</s-button>
              </s-button-group>
            </s-flex>
          </s-card-header>

          <s-card-section>
            <s-box
              border="divider"
              borderRadius="base"
              background="surface-subdued"
              style={{ minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <s-text tone="subdued">[Line Chart Placeholder]</s-text>
            </s-box>
          </s-card-section>

          <s-card-section>
            <s-grid columns={{xs: 1, sm: 2, md: 4}} gap="5">

              <s-box>
                <s-text size="small" tone="subdued">Ad Spend (7d)</s-text>
                <s-heading element="h2">{data.adSpend.value}</s-heading>
                <s-text size="small" tone="subdued">{data.adSpend.avg}</s-text>
                <KpiChange change={data.adSpend.change} />
              </s-box>

              <s-box>
                <s-text size="small" tone="subdued">Purchases (7d)</s-text>
                <s-heading element="h2">{data.purchases.value}</s-heading>
                <s-text size="small" tone="subdued">{data.purchases.avg}</s-text>
                <KpiChange change={data.purchases.change} />
              </s-box>

              <s-box>
                <s-text size="small" tone="subdued">Revenue (7d)</s-text>
                <s-heading element="h2">{data.revenue.value}</s-heading>
                <s-text size="small" tone="subdued">{data.revenue.avg}</s-text>
                <KpiChange change={data.revenue.change} />
              </s-box>

              <s-box>
                <s-text size="small" tone="subdued">Net Profit (7d)</s-text>
                <s-heading element="h2">{data.netProfit.value}</s-heading>
                <s-text size="small" tone="subdued">{data.netProfit.avg}</s-text>
                <KpiChange change={data.netProfit.change} />
              </s-box>

            </s-grid>
          </s-card-section>
        </s-card>
      </s-layout-block>
    </s-page>
  );
}
import MainFooter from "@/components/layout/main-footer";
import MainHeader from "@/components/layout/main-header";

export default function MarketingLayout({ children }) {
  return (
    <main>
      <MainHeader />
      <main>{children}</main>
      <MainFooter />
    </main>
  );
}

import { Metadata } from "next"
import { Breadcrumb } from "@/components/breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AccordionShowcase } from "@/components/showcases/accordion-showcase"
import { AlertShowcase } from "@/components/showcases/alert-showcase"
import { BadgeShowcase } from "@/components/showcases/badge-showcase"
import { ButtonShowcase } from "@/components/showcases/button-showcase"
import { CardShowcase } from "@/components/showcases/card-showcase"
import { CarouselShowcase } from "@/components/showcases/carousel-showcase"
import { ChartShowcase } from "@/components/showcases/chart-showcase"
import { FormShowcase } from "@/components/showcases/form-showcase"
import { MiscShowcase } from "@/components/showcases/misc-showcase"
import { TableShowcase } from "@/components/showcases/table-showcase"
import { TabsShowcase } from "@/components/showcases/tabs-showcase"

export const metadata: Metadata = {
  title: "UI Component Showcase | Avinash Sangle",
  description: "Complete showcase of all UI components used in the portfolio including the new carousel component",
}

export default function ShowcasePage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="container-project pt-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "UI Showcase" },
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="section">
        <div className="container-project">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">UI Component Showcase</h1>
            <p className="text-lg text-muted-foreground">
              Explore all the UI components used throughout this portfolio. Built with shadcn/ui and customized for optimal user experience.
            </p>
          </div>
        </div>
      </section>

      {/* Showcase Tabs */}
      <section className="section section-alt">
        <div className="container-project">
          <Tabs defaultValue="carousel" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 h-auto mb-8">
              <TabsTrigger value="carousel" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Carousel ⭐
              </TabsTrigger>
              <TabsTrigger value="cards">Cards</TabsTrigger>
              <TabsTrigger value="buttons">Buttons</TabsTrigger>
              <TabsTrigger value="forms">Forms</TabsTrigger>
              <TabsTrigger value="tables">Tables</TabsTrigger>
              <TabsTrigger value="misc">More</TabsTrigger>
            </TabsList>

            <TabsContent value="carousel" className="mt-8">
              <CarouselShowcase />
            </TabsContent>

            <TabsContent value="cards" className="mt-8 space-y-12">
              <CardShowcase />
              <BadgeShowcase />
            </TabsContent>

            <TabsContent value="buttons" className="mt-8 space-y-12">
              <ButtonShowcase />
              <AlertShowcase />
            </TabsContent>

            <TabsContent value="forms" className="mt-8">
              <FormShowcase />
            </TabsContent>

            <TabsContent value="tables" className="mt-8 space-y-12">
              <TableShowcase />
              <ChartShowcase />
            </TabsContent>

            <TabsContent value="misc" className="mt-8 space-y-12">
              <AccordionShowcase />
              <TabsShowcase />
              <MiscShowcase />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  )
}
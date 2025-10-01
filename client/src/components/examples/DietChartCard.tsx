import DietChartCard from "../DietChartCard";

export default function DietChartCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <DietChartCard
        id="1"
        title="Winter Wellness Plan"
        date="Dec 1, 2024"
        meals={5}
        dosha="Vata"
        onView={(id) => console.log("Viewing chart:", id)}
      />
      <DietChartCard
        id="2"
        title="Summer Cooling Diet"
        date="Nov 28, 2024"
        meals={4}
        dosha="Pitta"
        onView={(id) => console.log("Viewing chart:", id)}
      />
      <DietChartCard
        id="3"
        title="Balance & Energy"
        date="Nov 25, 2024"
        meals={6}
        dosha="Kapha"
        onView={(id) => console.log("Viewing chart:", id)}
      />
    </div>
  );
}

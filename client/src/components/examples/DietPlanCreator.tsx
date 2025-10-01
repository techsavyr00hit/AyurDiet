import DietPlanCreator from "../DietPlanCreator";

export default function DietPlanCreatorExample() {
  return (
    <div className="p-4 max-w-3xl">
      <DietPlanCreator onGenerate={(prefs) => console.log("Generated with:", prefs)} />
    </div>
  );
}

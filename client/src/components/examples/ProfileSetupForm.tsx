import ProfileSetupForm from "../ProfileSetupForm";

export default function ProfileSetupFormExample() {
  return <ProfileSetupForm onComplete={() => console.log("Profile setup complete")} />;
}

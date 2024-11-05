import { Section, Container } from "@/components/craft";
import { InputForm } from "@/components/main/form";

export default function Page() {
  return (
    <Section className="py-8">
      <Container className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="font-bold text-2xl">Submit your information!</h1>
          <h3 className="text-gray-600">Please fill out the form below to submit your information.</h3>
        </div>
        {/* Form */}
        <div>
          <InputForm />
        </div>
      </Container>
    </Section>
  );
}

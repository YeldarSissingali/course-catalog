import { notFound } from "next/navigation";
import { getCourse } from "@/lib/courses";
import LikeButton from "@/components/LikeButton";
import { EnrollForm } from "@/components/EnrollForm";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function CoursePage({ params }: PageProps) {
  const { id } = await params;
  const course = await getCourse(id);

  if (!course) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{course.credits} credits</p>
      <p className="text-gray-600 mb-8">{course.description}</p>
      <LikeButton courseId={course.id} initialLikes={course.likes} />

      <h2 className="mt-10 mb-3 text-xl font-semibold">Enroll in this course</h2>
      <EnrollForm courseId={course.id} />
    </main>
  );
}

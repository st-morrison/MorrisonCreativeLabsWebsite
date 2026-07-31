import { usePDF } from "@react-pdf/renderer";
import { ResumeDocument } from "@/resume/ResumeDocument";
import { resumeData } from "@/data/resumeData";

export function useResumeDownload() {
  const [instance] = usePDF({
    document: <ResumeDocument resumeData={resumeData} />,
  });

  const downloadResume = () => {
    if (instance.url) {
      const link = document.createElement("a");
      link.href = instance.url;
      link.download = "Samuel-Morrison-Resume.pdf";
      link.click();
    }
  };

  return { downloadResume, isLoading: instance.loading, error: instance.error };
}

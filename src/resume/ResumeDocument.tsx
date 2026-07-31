import { Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer";
import { ResumeModel } from "@/types/resume";

export interface Props {
  resumeData: ResumeModel;
}

const styles = StyleSheet.create({
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    marginTop: 8,
    marginBottom: 8,
  },
  page: { padding: 30 },
  bullet: { fontSize: 10, marginBottom: 2 },

  rowSpaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 5,
  },
  headerColLeft: {
    flexDirection: "column",
  },
  headerColRight: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  title: { fontSize: 18, fontWeight: 600 },
  subTitle: { fontSize: 16, fontWeight: 400 },
  jobTitle: { fontSize: 14, fontWeight: 400 },
  subText: { fontSize: 12, color: "#555555" },
  twoColRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  colHalf: {
    width: "48%",
    flexDirection: "column",
  },
});

export function ResumeDocument({ resumeData }: Props) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* ~~~~~~~~~~ header ~~~~~~~~~~~~~~ */}
        <View style={styles.rowSpaceBetween}>
          <View style={styles.headerColLeft}>
            <Text style={styles.title}>{resumeData.header.name}</Text>
            <Text style={styles.subText}>{resumeData.header.location}</Text>
          </View>
          <View style={styles.headerColRight}>
            <Text style={styles.title}>{resumeData.header.position}</Text>
            <Text style={styles.subText}>{resumeData.header.careerLength}</Text>
          </View>
        </View>
        <View style={styles.divider} />

        {/* ~~~~~~~~~~ objective ~~~~~~~~~~~~~~ */}
        <View>
          <Text style={styles.subTitle}>Objective</Text>
          <Text style={styles.bullet}>
            {resumeData.objective.missionStatement}
          </Text>
        </View>
        <View style={styles.divider} />

        {/* ~~~~~~~~~~ experience ~~~~~~~~~~~~~~ */}
        <View>
          <Text style={styles.subTitle}>Experience</Text>
          {resumeData.experience.map((job, x) => (
            <View key={x}>
              <View style={styles.rowSpaceBetween}>
                <Text style={styles.jobTitle}>
                  {job.role} — {job.company}
                </Text>
                <Text style={styles.subText}>{job.dates}</Text>
              </View>
              {job.bullets.map((bullet, y) => (
                <Text key={y} style={styles.bullet}>
                  • {bullet}
                </Text>
              ))}
            </View>
          ))}
        </View>
        <View style={styles.divider} />

        {/* ~~~~~~~~~~ projects ~~~~~~~~~~~~~~ */}
        <View>
          <Text style={styles.subTitle}>Projects</Text>
          {resumeData.projects.map((project, x) => (
            <View key={x}>
              <View style={styles.rowSpaceBetween}>
                <Text style={styles.jobTitle}>{project.name}</Text>
                <Text style={styles.subText}>{project.dates}</Text>
              </View>

              {project.bullets.map((bullet, y) => (
                <Text key={y} style={styles.bullet}>
                  • {bullet}
                </Text>
              ))}
            </View>
          ))}
        </View>
        <View style={styles.divider} />

        {/* ~~~~~~~~~~ skillsets & education ~~~~~~~~~~~~~~ */}
        <View style={styles.twoColRow}>
          <View style={styles.colHalf}>
            <Text style={styles.subTitle}>Skillset</Text>
            {resumeData.coreSkills.map((bullet, x) => (
              <Text key={x} style={styles.bullet}>
                • {bullet}
              </Text>
            ))}
          </View>

          <View style={styles.colHalf}>
            <View>
              <Text style={styles.subTitle}>Agentic Solutions</Text>
              {resumeData.agenticSolutions.map((bullet, x) => (
                <Text key={x} style={styles.bullet}>
                  • {bullet}
                </Text>
              ))}
            </View>

            <View style={{ marginTop: 8 }}>
              <Text style={styles.subTitle}>Education</Text>
              {resumeData.education.map((school, x) => (
                <Text key={x} style={styles.bullet}>
                  {school.institution}, {school.dates}
                </Text>
              ))}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

import { Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer";
import { ResumeModel } from "../types/resume";

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

  subBulletRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginLeft: 36, // one standard tab (0.5in = 36pt)
  },

  hollowBullet: {
    width: 4,
    height: 4,
    borderRadius: 2,
    borderWidth: 0.75,
    borderColor: "#000",
    marginTop: 4, // nudge to line up with the text's x-height; adjust to your font size
    marginRight: 6,
  },

  subBulletText: {
    flex: 1, // long text wraps under itself instead of under the bullet
    fontSize: 10, // match styles.bullet
  },

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

        {/* ~~~~~~~~~~ summary ~~~~~~~~~~~~~~ */}
        <View>
          <Text style={styles.subTitle}>Summary</Text>
          <Text style={styles.bullet}>{resumeData.objective.summary}</Text>
        </View>
        <View style={styles.divider} />

        {/* ~~~~~~~~~~ skills ~~~~~~~~~~~~~~ */}
        <View>
          <Text style={styles.subTitle}>Skills</Text>
          {resumeData.skills.map((skill, x) => (
            <View key={x}>
              <Text style={styles.bullet}>
                {skill.category}: {skill.skillSet}
              </Text>
            </View>
          ))}
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

        {/* ~~~~~~~~~~ certifications & education ~~~~~~~~~~~~~~ */}
        <View>
          <Text style={styles.subTitle}>Education</Text>
          {resumeData.education.map((edu, x) => (
            <View key={x}>
              <Text style={styles.bullet}>
                • {edu.cert}: {edu.details}
              </Text>
              {edu.detailContext && (
                <View style={styles.subBulletRow}>
                  <View style={styles.hollowBullet} />
                  <Text style={styles.subBulletText}>{edu.detailContext}</Text>
                </View>
              )}
            </View>
          ))}
        </View>

        {/* ~~~~~~~~~~ projects ~~~~~~~~~~~~~~ */}
        {/* <View>
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
        <View style={styles.divider} /> */}
      </Page>
    </Document>
  );
}

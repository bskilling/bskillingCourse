import React from 'react';
import { Page, Text, Image, Document, StyleSheet } from '@react-pdf/renderer';
const styles = StyleSheet.create({
  body: {
    padding: 20,
    textAlign: 'center',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: '12',
    bottom: '30',
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});
const PdfFile = () => {
  return (
    <Document>
      <Page style={styles.body}>
        <Text>
          AWS, the top public cloud platform, and SAP, a leading provider of enterprise application
          software, combine to optimize businesses. Running SAP on AWS offers flexibility and value.
          The AWS Certified SAP on AWS Specialty certification validates expertise in handling SAP
          workloads on AWS. This course covers all aspects of SAP on AWS, empowering learners to
          excel in this domain.
        </Text>
        <Text
          style={styles.pageNumber}
          // render={({ pageNumber, totalPages }) =>
          //   `${pageNumber} / ${totalPages}`
          // }
          fixed
        />
      </Page>
    </Document>
  );
};
export default PdfFile;

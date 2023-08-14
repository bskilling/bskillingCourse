import { NextApiRequest, NextApiResponse } from "next";
import PDFDocument from "pdfkit";

const generatePDF = async (req: NextApiRequest, res: NextApiResponse) => {
  // Create a new PDF document
  const doc = new PDFDocument();

  // Pipe the PDF document to the response
  doc.pipe(res);

  doc
    .text("", { align: "center" }) // Empty text for centering
    .image("public/logo.png", {
      fit: [500, 100],
      align: "center",
      valign: "center",
    })
    .moveDown(3);

  const title = req.body.title;
  doc.fontSize(22).text(title, { align: "center" });

  const titleWidth = doc.widthOfString(title);

  // Calculate underline position
  const underlineY = doc.y + 3; // Adjust this value to position the underline
  const underlineColor = "#125582"; // Desired color

  // Calculate underline width (you can adjust this value)
  const underlineWidth = titleWidth * 0.5; // Adjust the multiplier to change the width

  // Calculate underline starting x-coordinate
  const startX = (doc.page.width - underlineWidth) / 2;

  // Draw the underline
  doc
    .moveTo(startX, underlineY)
    .lineTo(startX + underlineWidth, underlineY)
    .stroke(underlineColor);

  // Move down after the underline
  doc.y = underlineY + 5;
  doc.moveDown(0.9);
  // Add a heading for the overview section

  const { price, level, trainingType, duration, headLine } = req.body;

  doc.fontSize(14).text(` ${headLine}`);
  doc.moveDown(0.5);
  doc.fontSize(14).text(`Price: ${price}`);
  doc.moveDown(0.5);
  doc.fontSize(14).text(`Level: ${level}`);
  doc.moveDown(0.5);
  doc.fontSize(14).text(`Training Type: ${trainingType}`);
  doc.moveDown(0.5);
  doc.fontSize(14).text(`Duration: ${duration}`);
  doc.moveDown(0.5);
  doc.moveDown(0.12);
  const bodyText = req.body.bodyText;
  doc.moveDown(0.5);
  doc.fontSize(12).text(bodyText);
  doc.moveDown(0.9);
  // Add the overview text from the request body to the PDF
  const overviewText = req.body.overview;
  doc.moveDown(0.3);

  doc.fontSize(18).text("Overview", { align: "left" }); //title overview
  doc.moveDown(0.5);
  doc.fontSize(12).text(overviewText);

  doc.moveDown(0.9);

  doc.fontSize(18).text("Objectives", { align: "left" }); //title objectives
  doc.moveDown(0.5);
  const objectives = req.body.objectives;
  if (objectives && objectives.length > 0) {
    doc.fontSize(12);
    for (const objective of objectives) {
      doc.text(`- ${objective}`);
    }
  } else {
    doc.text("No objectives provided.");
  }
  doc.moveDown(0.9);
  doc.fontSize(18).text("Prerequisites", { align: "left" }); //title objectives
  doc.moveDown(0.5);

  const Prerequisites = req.body.Prerequisites;
  if (Prerequisites && Prerequisites.length > 0) {
    doc.fontSize(12);
    for (const objective of Prerequisites) {
      doc.text(` ${objective}`);
    }
  } else {
    doc.text("No objectives provided.");
  }
  doc.moveDown(0.9);
  doc.fontSize(18).text("Skills Covered", { align: "left" }); //title objectives
  doc.moveDown(0.5);
  const skillsCovered = req.body.skillsCovered;
  if (skillsCovered && skillsCovered.length > 0) {
    doc.fontSize(12);
    for (let i = 0; i < skillsCovered.length; i++) {
      doc.text(`- ${skillsCovered[i]}`);
    }
  } else {
    doc.text("No skills covered provided.");
  }

  doc.moveDown(0.9);
  doc.fontSize(18).text("Audience", { align: "left" }); //title objectives
  doc.moveDown(0.5);
  const audience = req.body.audience;
  if (audience && audience.length > 0) {
    doc.fontSize(12);
    for (let i = 0; i < skillsCovered.length; i++) {
      doc.text(`- ${skillsCovered[i]}`);
    }
  } else {
    doc.text("");
  }

  doc.moveDown(0.9);
  doc.fontSize(18).text("Key Features", { align: "left" }); //title objectives
  doc.moveDown(0.5);
  const KeyFeatures = req.body.KeyFeatures;
  if (KeyFeatures && KeyFeatures.length > 0) {
    doc.fontSize(12);
    for (let i = 0; i < KeyFeatures.length; i++) {
      doc.text(`- ${KeyFeatures[i]}`);
    }
  } else {
    doc.text("");
  }

  doc.moveDown(0.9);
  doc.fontSize(18).text("Resources", { align: "left" }); //title objectives
  doc.moveDown(0.5);
  const Resources = req.body.Resources;
  if (Resources && Resources.length > 0) {
    doc.fontSize(12);
    for (let i = 0; i < Resources.length; i++) {
      doc.text(`- ${Resources[i]}`);
    }
  } else {
    doc.text("");
  }

  doc.moveDown(0.9);
  doc.fontSize(18).text("Benefits", { align: "left" }); //title objectives
  doc.moveDown(0.5);
  const benefites = req.body.benefites;
  if (benefites && benefites.length > 0) {
    doc.fontSize(12);
    for (let i = 0; i < benefites.length; i++) {
      doc.text(`- ${benefites[i]}`);
    }
  } else {
    doc.text("");
  }

  doc.moveDown(0.9);
  const Curriculum = "Curriculum";
  doc.fontSize(18).text(Curriculum, { align: "left" });

  // Add a gap (margin) to the bottom after the title
  doc.moveDown(0.5); // Adjust the value as needed (in inches)

  // Add the curriculum with chapters and lessons
  const curriculum = req.body.curriculum;
  if (curriculum && curriculum.length > 0) {
    doc.fontSize(14);
    for (let i = 0; i < curriculum.length; i++) {
      const chapter = curriculum[i].chapter;
      const lessons = curriculum[i].lessons;

      // Display chapter name
      doc.moveDown(0.5);
      // Display lessons
      doc.fontSize(14).text(chapter, {});

      doc.moveDown(0.5);
      // Display lessons for the chapter
      for (let j = 0; j < lessons.length; j++) {
        doc.fontSize(12).text(`    ${j + 1}. ${lessons[j]}`);
        doc.moveDown(0.8);
      }
    }
  } else {
    doc.text("No curriculum provided.");
  }

  doc.moveDown(0.9);
  doc.fontSize(18).text("Outcomes", { align: "left" }); //title objectives
  doc.moveDown(0.5);
  const outcomes = req.body.outcomes;
  if (outcomes && outcomes.length > 0) {
    doc.fontSize(12);
    for (let i = 0; i < outcomes.length; i++) {
      doc.text(`- ${outcomes[i]}`);
    }
  } else {
    doc.text("");
  }

  doc.moveDown(0.9);
  const certification = req.body.certification;
  doc.fontSize(18).text("Certification", { align: "left" }); //title overview
  doc.moveDown(0.5);
  doc.fontSize(12).text(certification);

  doc.moveDown(0.9);

  doc.fontSize(18).text("Faqs", { align: "left" });

  // Add a gap (margin) to the bottom after the title
  doc.moveDown(0.5); // Adjust the value as needed (in inches)

  // Add the curriculum with chapters and lessons
  const faq = req.body.faq;
  if (faq && faq.length > 0) {
    doc.fontSize(14);
    for (let i = 0; i < faq.length; i++) {
      const question = faq[i].question;
      const answer = faq[i].answer;

      // Display chapter name
      doc.moveDown(0.5);
      // Display lessons
      doc.fontSize(14).text(question, {});
      doc.moveDown(0.8);
      doc.fontSize(12).text(`- ${answer}`);
      doc.moveDown(0.8);
    }
  } else {
    doc.text("No curriculum provided.");
  }

  doc.on("pageAdded", (pageNumber) => {
    doc.fontSize(10).text(`Page ${pageNumber}`, { align: "right" });
  });
  // End the document and finalize the response
  doc.end();
};

export default generatePDF;

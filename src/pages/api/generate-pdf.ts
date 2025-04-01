import { NextApiRequest, NextApiResponse } from "next";
import PDFDocument, { x } from "pdfkit";

const generatePDF = async (req: NextApiRequest, res: NextApiResponse) => {
  const doc = new PDFDocument();
  doc.pipe(res);
  doc.registerFont("customFontBold", "public/fonts/SourceSansPro-Bold.ttf");
  doc.registerFont("regular", "public/fonts/SourceSansPro-Regular.ttf");
  doc.registerFont("semibold", "public/fonts/SourceSansPro-Semibold.ttf");
  doc.font("customFontBold");
  doc.font("semibold");
  doc.font("regular");
  const imageWidth = 445; // Image width in pixels
  const imageHeight = 300;
  const centerX = (doc.page.width - imageWidth) / 2;
  const centerY = (doc.page.height - imageHeight) / 3;
  doc.image("public/t2.png", centerX, centerY, {
    width: imageWidth,
    height: imageHeight,
  });

  // Move to the bottom of the page
  const bottomY = doc.page.height - imageHeight + 50; // Adjust the spacing as needed
  doc.y = bottomY;

  const title = req.body.title;
  doc
    .font("customFontBold")
    .fontSize(18)
    .fillColor("#135582")
    .text(title, { align: "center" });
  doc.moveDown(0.5);
  const text1 = "Course Brochure  ";
  const text2 = "To explore other learning opportunities,  ";

  // Create some space before the new text
  doc.fontSize(16).text(text1, { align: "center" });
  doc.moveDown(1); // Create some space before the new text
  doc
    .font("semibold")
    .fontSize(14)
    .fillColor("#125582")
    .text("")
    .text("To explore other learning opportunities, please visit ", {
      align: "center",
    });
  doc.moveDown(0.2);
  doc.fillColor("blue").text("http://www.bskilling.com/", {
    link: "http://www.bskilling.com/",
    align: "center",
    underline: true,
  });
  doc.moveDown(0.5);
  doc
    .fontSize(14)
    .fillColor("#125582")
    .text("")
    .text("or write to us at", { align: "center" });
  doc.moveDown(0.2);
  doc.fillColor("blue").text("support@bskilling.com", {
    link: "mailto:support@bskilling.com",
    align: "center",
    underline: true,
  });
  doc.moveDown(0.15);

  doc.addPage();
  const { price, level, trainingType, duration, headLine } = req.body;

  doc.font("semibold").fontSize(16).fillColor("#125582").text(`${headLine}`);
  doc.moveDown(0.5);
  doc
    .fillColor("black")
    .fontSize(13)
    .font("semibold")
    .text(`Price: ${price} (INR)`);
  doc.moveDown(0.5);
  doc.fontSize(13).font("semibold").text(`Level: ${level}`).fillColor("black");
  doc.moveDown(0.5);
  doc.fontSize(13).font("semibold").text(`Training Type: ${trainingType}`);
  doc.moveDown(0.5);
  doc.fontSize(13).font("semibold").text(`Duration: ${duration}`);
  doc.moveDown(0.5);
  doc.moveDown(0.13);
  const bodyText = req.body.bodyText;
  doc.moveDown(0.5);
  doc.font("regular").fontSize(12).text(bodyText);
  doc.moveDown(0.9);
  // Add the overview text from the request body to the PDF
  const overviewText = req.body.overview;
  doc.moveDown(0.2);

  doc
    .font("customFontBold")
    .fontSize(15)
    .fillColor("#135582")
    .text("Overview", { align: "left" }); //title overview
  doc.moveDown(0.5);
  doc.font("regular").fillColor("black").fontSize(12).text(overviewText);

  doc.moveDown(0.9);

  doc
    .font("customFontBold")
    .fontSize(15)
    .fillColor("#135582")
    .text("Objectives", { align: "left" }); //title objectives
  doc.moveDown(0.5);
  const objectives = req.body.objectives;
  if (objectives && objectives.length > 0) {
    doc.fontSize(12);
    for (const objective of objectives) {
      doc.font("regular").fillColor("black").text(`- ${objective}`);
      doc.moveDown(0.2);
    }
  } else {
    doc.text("No objectives provided.");
  }
  doc.moveDown(0.9);
  doc
    .font("customFontBold")
    .fontSize(15)
    .fillColor("#135582")
    .text("Prerequisites", { align: "left" }); //title objectives
  doc.moveDown(0.5);

  const Prerequisites = req.body.Prerequisites;
  if (Prerequisites && Prerequisites.length > 0) {
    doc.font("regular").fontSize(12);
    for (const objective of Prerequisites) {
      doc.fillColor("black").text(`- ${objective}`);
      doc.moveDown(0.2);
    }
  } else {
    doc.text("No objectives provided.");
  }
  doc.moveDown(0.9);
  doc
    .font("customFontBold")
    .fontSize(15)
    .fillColor("#135582")
    .text("Skills Covered", { align: "left" }); //title objectives
  doc.moveDown(0.5);
  const skillsCovered = req.body.skillsCovered;
  if (skillsCovered && skillsCovered.length > 0) {
    doc.fontSize(12);
    for (let i = 0; i < skillsCovered.length; i++) {
      doc.font("regular").fillColor("black").text(`- ${skillsCovered[i]}`);
      doc.moveDown(0.2);
    }
  } else {
    doc.text("No skills covered provided.");
  }

  doc.moveDown(0.9);
  doc
    .font("customFontBold")
    .fontSize(15)
    .fillColor("#135582")
    .text("Audience", { align: "left" }); //title objectives
  doc.moveDown(0.5);
  const audience = req.body.audience;
  if (audience && audience.length > 0) {
    doc.font("regular").fontSize(12);
    for (let i = 0; i < audience.length; i++) {
      doc.fillColor("black").text(`- ${audience[i]}`);
      doc.moveDown(0.2);
    }
  } else {
    doc.text("");
  }

  doc.moveDown(0.9);
  doc
    .font("customFontBold")
    .fontSize(15)
    .fillColor("#135582")
    .text("Key Features", { align: "left" }); //title objectives
  doc.moveDown(0.5);
  const KeyFeatures = req.body.KeyFeatures;
  if (KeyFeatures && KeyFeatures.length > 0) {
    doc.fontSize(12);
    for (let i = 0; i < KeyFeatures.length; i++) {
      doc.font("regular").fillColor("black").text(`- ${KeyFeatures[i]}`);
      doc.moveDown(0.2);
    }
  } else {
    doc.text("");
  }

  doc.moveDown(0.9);
  doc
    .font("customFontBold")
    .fontSize(15)
    .fillColor("#135582")
    .text("Resources", { align: "left" }); //title objectives
  doc.moveDown(0.5);
  const Resources = req.body.Resources;
  if (Resources && Resources.length > 0) {
    doc.fontSize(12);
    for (let i = 0; i < Resources.length; i++) {
      doc.font("regular").fillColor("black").text(`- ${Resources[i]}`);
      doc.moveDown(0.2);
    }
  } else {
    doc.text("");
  }

  doc.moveDown(0.9);
  doc
    .font("customFontBold")
    .fontSize(15)
    .fillColor("#135582")
    .text("Benefits", { align: "left" }); //title objectives
  doc.moveDown(0.5);
  const benefites = req.body.benefites;
  if (benefites && benefites.length > 0) {
    doc.fontSize(12);
    for (let i = 0; i < benefites.length; i++) {
      doc.font("regular").fillColor("black").text(`- ${benefites[i]}`);
      doc.moveDown(0.2);
    }
  } else {
    doc.text("");
  }

  doc.moveDown(0.9);
  const Curriculum = "Curriculum";
  doc
    .font("customFontBold")
    .fontSize(15)
    .fillColor("#135582")
    .text(Curriculum, { align: "left" });

  // Add a gap (margin) to the bottom after the title
  doc.moveDown(0.5); // Adjust the value as needed (in inches)

  // Add the curriculum with chapters and lessons
  const curriculum = req.body.curriculum;
  if (curriculum && curriculum.length > 0) {
    doc.fontSize(13);
    for (let i = 0; i < curriculum.length; i++) {
      const chapter = curriculum[i].chapter;
      const lessons = curriculum[i].lessons;

      // Display chapter name
      doc.moveDown(0.5);
      // Display lessons
      doc.font("semibold").fillColor("black").fontSize(13).text(chapter, {});

      doc.moveDown(0.5);
      // Display lessons for the chapter
      for (let j = 0; j < lessons.length; j++) {
        doc
          .font("regular")
          .fontSize(12)
          .fillColor("black")
          .text(`    ${j + 1}. ${lessons[j]}`);

        doc.moveDown(0.2);
      }
    }
  } else {
    doc.text("No curriculum provided.");
  }

  doc.moveDown(0.9);
  doc
    .font("customFontBold")
    .fontSize(15)
    .fillColor("#135582")
    .text("Outcomes", { align: "left" }); //title objectives
  doc.moveDown(0.5);
  const outcomes = req.body.outcomes;
  if (outcomes && outcomes.length > 0) {
    doc.fontSize(12);
    for (let i = 0; i < outcomes.length; i++) {
      doc.font("regular").fillColor("black").text(`- ${outcomes[i]}`);
      doc.moveDown(0.2);
    }
  } else {
    doc.text("");
  }

  doc.moveDown(0.9);
  const certification = req.body.certification;
  doc
    .font("customFontBold")
    .fontSize(15)
    .fillColor("#135582")
    .text("Certification", { align: "left" }); //title overview
  doc.moveDown(0.5);
  doc.font("regular").fontSize(12).fillColor("black").text(certification);

  doc.moveDown(0.9);

  doc
    .font("customFontBold")
    .fontSize(15)
    .fillColor("#135582")
    .text("FAQs", { align: "left" });

  // Add a gap (margin) to the bottom after the title
  doc.moveDown(0.5); // Adjust the value as needed (in inches)

  // Add the curriculum with chapters and lessons
  const faq = req.body.faq;
  if (faq && faq.length > 0) {
    doc.fontSize(13);
    for (let i = 0; i < faq.length; i++) {
      const question = faq[i].question;
      const answer = faq[i].answer;

      // Display chapter name
      doc.moveDown(0.5);
      // Display lessons
      doc
        .font("semibold")
        .fontSize(13)
        .fillColor("black")
        .text(`${i + 1}. ${question}`, {});
      doc.moveDown(0.8);
      doc.font("regular").fontSize(12).fillColor("black").text(`${answer}`);
      doc.moveDown(0.8);
    }
  } else {
    doc.text("No curriculum provided.");
  }

  doc.on("pageAdded", (pageNumber) => {
    doc.fontSize(12).text(`Page ${pageNumber}`, { align: "right" });
  });
  doc.end();
};

export default generatePDF;

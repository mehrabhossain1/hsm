type PdfDocument = {
    title: string;
    filePath: string;
};

export const generatePdfList = (
    category: string,
    fileNames: string[]
): PdfDocument[] => {
    return fileNames.map((fileName) => ({
        title: fileName.replace(".pdf", ""), // Remove .pdf for the title
        filePath: `/resources/TopicWiseReports/${category}/${fileName}`,
    }));
};

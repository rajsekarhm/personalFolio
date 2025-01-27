import * as fs from 'fs';
import * as path from 'path';

interface SaveImageResult {
  success: boolean;
  path?: string;
  error?: string;
}

export class Base64ImageConverter {
  /**
   * Converts a base64 string to an image and saves it to the specified folder
   * @param base64String - The base64 encoded image string
   * @param outputFolder - The folder path where the image should be saved
   * @param filename - Optional filename for the saved image (default: 'image.jpg')
   * @returns Promise<SaveImageResult> - Result object containing success status and file path or error
   */
  public static async saveBase64Image(
    base64String: string,
    outputFolder: string,
    filename: string = 'image.jpg'
  ): Promise<SaveImageResult> {
    try {
      // Create output folder if it doesn't exist
      await fs.promises.mkdir(outputFolder, { recursive: true });

      // Clean up the base64 string
      let cleanBase64 = base64String.trim();
      
      // Remove the data URL prefix if present
      if (cleanBase64.includes('base64,')) {
        cleanBase64 = cleanBase64.split('base64,')[1];
      }

      // Convert base64 to buffer
      const imageBuffer = Buffer.from(cleanBase64, 'base64');

      // Create full output path
      const outputPath = path.join(outputFolder, filename);

      // Write the file
      await fs.promises.writeFile(outputPath, imageBuffer);

      return {
        success: true,
        path: outputPath
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      };
    }
  }

  /**
   * Validates if a string is a valid base64 encoded image
   * @param base64String - The string to validate
   * @returns boolean - True if valid, false otherwise
   */
  public static isValidBase64Image(base64String: string): boolean {
    try {
      // Remove data URL prefix if present
      const cleanBase64 = base64String.includes('base64,')
        ? base64String.split('base64,')[1]
        : base64String;

      // Try to decode the string
      Buffer.from(cleanBase64, 'base64');
      return true;
    } catch {
      return false;
    }
  }
}

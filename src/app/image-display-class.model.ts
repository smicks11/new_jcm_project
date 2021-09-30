export class ImageDisplayClass {
    public width: number;
    public height: number;
    public caption: string;
    public imageUrl: string;
    public altText: string;

    constructor(width: number, height: number, caption: string, imageUrl: string, altText: string) {
        this.width = width;
        this.height = height;
        this.caption = caption;
        this.imageUrl = imageUrl;
        this.altText = altText;
      }

      getWidth(): number {
        return this.width;
      }
      getHeight(): number {
        return this.height;
      }
      getImage(): string {
        return `${this.imageUrl}`;
      }
      getAltText(): string {
        return `${this.altText}`;
      }
      getCaption(): string {
        return `${this.caption}`;
      }
}

export class CardClass {
    public name: string;
    public role: string;
    public socialOne: string;
    public socialTwo: string;
    public socialThree: string;
    public socialFour: string;
    public imageUrl: string;
    public desc: string;
    public flip: boolean;

    constructor(name: string, role: string, socialOne: string, socialTwo: string, socialThree: string, socialFour: string, imageUrl: string, desc: string, flip: boolean) {
        this.name = name;
        this.role = role;
        this.socialOne = socialOne;
        this.socialTwo = socialTwo;
        this.socialThree = socialThree;
        this.socialFour = socialFour;
        this.imageUrl = imageUrl;
        this.desc = desc;
        this.flip = flip;
      }

      getName(): string {
        return this.name;
      }
      getRole(): string {
        return this.role;
      }
      getImage(): string {
        return this.imageUrl;
      }
      getDesc(): string {
        return this.desc;
      }
      getSocialOne(): string {
        return this.socialOne;
      }
      getSocialTwo(): string {
        return this.socialTwo;
      }
      getSocialThree(): string {
        return this.socialThree;
      }
      getSocialFour(): string {
        return this.socialFour;
      }
}

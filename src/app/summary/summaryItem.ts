/**
 * The SummaryItem is the base class to define
 * the abstract summary items
 */
class SummaryItem {
    public readonly type;
    constructor(type: String) {
      this.type = type;
    }
}

/**
 * The survey title type
 */
  export class SurveyTitle extends SummaryItem {
    public readonly title;
    constructor(title: String) {
        super('SurveyTitle');
        this.title = title;
    }
  }

  /**
   * The section title type
   */
  export class SectionTitle extends SummaryItem {
    public readonly title;
    public readonly totalScore;
    constructor(title: String, totalScore) {
        super('SectionTitle');
        this.title = title;
        this.totalScore = totalScore;
    }
  }

  /**
   * the Question type
   */
  export class Question extends SummaryItem {
    public readonly content;
    public readonly score;
    public readonly answer;
    constructor(content: String, score: Number, answer: String) {
        super('Question');
        this.content = content;
        this.score   = score;
        this.answer  = answer;
    }
  }

  /**
   * the description type
   */
  export class Description extends SummaryItem {
    public readonly content;
    constructor(content: String) {
        super('Description');
        this.content = content;
    }
}
class HynekMessages {
  /**
   * @member {string}
   */
  NL

  /**
   * @member {string}
   */
  DD

  /**
   * @member {string}
   */
  RV

  /**
   * @member {string}
   */
  CE1

  /**
   * @member {string}
   */
  CE2

  /**
   * @member {string}
   */
  CE3

  /**
   * @member {string}
   */
  CE4
}

class ConclusionMessages {
  /**
   * @member {string}
   */
  hoax

  /**
   * @member {string}
   */
  misinterpretation

  /**
   * @member {string}
   */
  unknown
}

class AnswerMessages {
  /**
   * @member {string}
   */
  correct

  /**
   * @member {string}
   */
  incorrect

  /**
   * @member {ConclusionMessages}
   */
  conclusion

  /**
   * @param {number} good
   * @param {number} total
   * @result {string}
   */
  result
}

class ClassificationMessages {
  /**
   * @member {HynekMessages}
   */
  hynek
}

class CaseMessages {
  /**
   * @member {ClassificationMessages}
   */
  classification
}

class QuestionMessages {
  /**
   * @member {string}
   */
  true

  /**
   * @member {string}
   */
  false

  /**
   * @member {string}
   */
  or

  /**
   * @member {string}
   */
  pick

  between

  circa
}

class Messages {
  /**
   * @member {QuestionMessages}
   */
  question

  /**
   * @member {AnswerMessages}
   */
  answer

  /**
   * @member {CaseMessages}
   */
  case
}

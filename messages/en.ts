import enToPt from './pt'

const _ = Object.keys(enToPt['default']).reduce((p, c) => ({ ...p, [c]: c }), {})
export default {
  "default": {
    ..._,
    'teach-students-worldwide-description': 'Amet nunc diam orci duis ut sit diam arcu, nec. ' +
      'Eleifend proin massa tincidunt viverra lectus pulvinar. ' +
      'Nunc ipsum est pellentesque turpis ultricies. em',
    'marie-pairot-bigapp': 'Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo.',
    'meet-international-students-teachers-description': 'Morbi sit egestas dignissim pharetra, ' +
      'sed amet. Tempus justo senectus risus ac vel, ' +
      'velit, nunc. Eget commodo eget in aliquam facilisi' +
      'facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, ' +
      'faucibus aenean lorem faucibus integer.',
    'carousel_card_1_description': 'Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.',
    'carousel_card_2_description': 'Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultrices nisi, nec tortor. Vestibulum, ultrices ultricies neque, hac ultricies dolor.',
    'carousel_card_3_description': 'Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a.',
    'all-the-cool-features-description': 'Mauris consequat, cursus pharetra et,' +
      'habitasse rhoncus quis odio ac. ' +
      'In et dolor eu donec maecenas nulla. Cum sed orci, ' +
      'sit pellentesque quisque feugiat cras ullamcorper. ' +
      'Ultrices in amet, ullamcorper non viverra a, neque orci.',
    'join-world-learning': 'Join a world of learning',
    'malesuada-description': 'Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.',
    'risus-elit-description': 'Risus elit et fringilla habitant ut facilisi.',
    'section_nine_title': 'Ready for your next project?',
    'section_nine_description': 'Sit elit feugiat turpis sed integer integer accumsan turpis.',
    'email_label': 'Email',
    'message_label': 'Message',
    'request_demo': 'Request Demo',
    'email_placeholder': 'Enter your email',
    'message_placeholder': 'What are you say ?',
    "by": "By",
    "hi_teach": "Hi Teach!",
    "im": "I'm",
    "and_i_would_say": "and I would say that",
    'user-countries': 'User countries',
    'valued-teachers': 'Valued teachers',
    'happy-students': 'Happy students',
  }
}
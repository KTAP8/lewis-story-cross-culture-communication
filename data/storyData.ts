export type StyleType = "linear" | "multi" | "reactive";

export type StoryNode = {
  text: string;
  image: any;
  options: { text: string; next: string; style?: StyleType }[];
};

export const story: Record<string, StoryNode> = {
  start: {
    text: "You arrive at an international business workshop in Tokyo.",
    image: require("@/assets/images/play/arrive_first_scene.png"),
    options: [
      {
        text: "Introduce yourself and show your agenda.",
        next: "agendaIntro",
        style: "linear",
      },
      {
        text: "Start with small talk and ask about food preferences.",
        next: "smallTalk",
        style: "multi",
      },
      {
        text: "Wait for the host to speak first.",
        next: "pauseRespect",
        style: "reactive",
      },
    ],
  },

  agendaIntro: {
    text: "Your data is well-organized. The group nods but remains quiet.",
    image: require("@/assets/images/play/agendaIntro.png"),
    options: [
      {
        text: "Continue outlining your plan in detail.",
        next: "slidePush",
        style: "linear",
      },
      {
        text: "Ask if they’d like to share their thoughts first.",
        next: "inviteDialogue",
        style: "reactive",
      },
    ],
  },

  smallTalk: {
    text: "Some laugh, but a few seem uncomfortable.",
    image: require("@/assets/images/play/smallTalk.png"),
    options: [
      {
        text: "Tell a funny story to loosen the mood.",
        next: "funnyStory",
        style: "multi",
      },
      {
        text: "Pause and ask about their expectations instead.",
        next: "expectationShift",
        style: "reactive",
      },
    ],
  },

  pauseRespect: {
    text: "They begin with a warm welcome. You’ve earned trust.",
    image: require("@/assets/images/play/pauseRespect.png"),
    options: [
      {
        text: "Ask about their goals for the meeting.",
        next: "goalInquiry",
        style: "reactive",
      },
      {
        text: "Start presenting your solution.",
        next: "slidePush",
        style: "linear",
      },
    ],
  },

  slidePush: {
    text: "The host listens but looks slightly tense.",
    image: require("@/assets/images/play/slidePush.png"),
    options: [
      {
        text: "Pause to ask for input.",
        next: "inviteDialogue",
        style: "reactive",
      },
      {
        text: "Continue confidently to the end.",
        next: "result",
        style: "linear",
      },
    ],
  },

  inviteDialogue: {
    text: "The host engages more. A shared tone is established.",
    image: require("@/assets/images/play/inviteDialogue.png"),
    options: [
      { text: "Finish the session", next: "result", style: "reactive" },
    ],
  },

  funnyStory: {
    text: "They laugh and seem more open to your approach.",
    image: require("@/assets/images/play/funnyStory.png"),
    options: [{ text: "Wrap up your intro", next: "result", style: "multi" }],
  },

  expectationShift: {
    text: "They respond with curiosity and share their thoughts.",
    image: require("@/assets/images/play/expectationShift.png"),
    options: [
      { text: "Wrap up your intro", next: "result", style: "reactive" },
    ],
  },

  goalInquiry: {
    text: "They appreciate your interest in their needs.",
    image: require("@/assets/images/play/goalInquiry.png"),
    options: [
      {
        text: "Move into your presentation",
        next: "result",
        style: "reactive",
      },
    ],
  },
  result: {
    text: "Let's see what kind of communicator you are!",
    image: require("@/assets/images/mascot.png"),
    options: [], // No options needed — we'll trigger showResult manually
  },
};

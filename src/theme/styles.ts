enum LinkColor {
  DEFAULT = "teal.500",
}

enum TextDecoration {
  DEFAULT = "underline",
}

enum LineHeight {
  DEFAULT = "1.75",
}

enum MarginTop {
  DEFAULT = "1.25em",
}

enum MarginBottom {
  DEFAULT = "1.25em",
}

const styles = {
  global: {
    ".mdx": {
      a: {
        color: LinkColor.DEFAULT,
        _hover: {
          textDecoration: TextDecoration.DEFAULT,
        },
      },
      p: {
        lineHeight: LineHeight.DEFAULT,
        mt: MarginTop.DEFAULT,
        mb: MarginBottom.DEFAULT,
      },
    },
    ".read-more": {
      a: {
        color: LinkColor.DEFAULT,
        _hover: {
          textDecoration: TextDecoration.DEFAULT,
        },
      },
    },
    ".description": {
      p: {
        lineHeight: LineHeight.DEFAULT,
        mt: MarginTop.DEFAULT,
        mb: MarginBottom.DEFAULT,
      },
    },
  },
};

export default styles;

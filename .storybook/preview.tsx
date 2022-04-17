// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// }

import { initialize, mswDecorator } from 'msw-storybook-addon';

// Initialize MSW
initialize();

import { ChakraProvider, theme } from '@chakra-ui/react';

const withChakra = (StoryFn: Function) => {
    return (
        <ChakraProvider theme={theme}>
        <div id="story-wrapper" style={{ minHeight: "100vh" }}>
                <StoryFn />
            </div>
        </ChakraProvider>
    );
};

export const decorators = [withChakra,mswDecorator];
// `@expo/config` is installed with the `expo` package
// ensuring the versioning is correct.
import { ExpoConfig, ConfigContext } from '@expo/config';

//https://github.com/expo/expo-cli/issues/4100
export default ({ config }: ConfigContext): ExpoConfig => {
  // console.log('EXPO CPNFIG', config);
  // console.log(process.env.BRAND)
  return {
    ...config,
    name: "test name",
    slug: "test slug",
    extra: {
      brand: process.env.BRAND
    }

  };
};
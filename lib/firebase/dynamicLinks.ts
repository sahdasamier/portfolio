import { app } from './config';

const DYNAMIC_LINKS_DOMAIN = process.env.NEXT_PUBLIC_FIREBASE_DYNAMIC_LINKS_DOMAIN;
const WEB_API_KEY = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;

export async function createDynamicLink(path: string) {
  try {
    const response = await fetch(
      `https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=${WEB_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          dynamicLinkInfo: {
            domainUriPrefix: DYNAMIC_LINKS_DOMAIN,
            link: `${process.env.NEXT_PUBLIC_SITE_URL}${path}`,
            androidInfo: {
              androidPackageName: process.env.NEXT_PUBLIC_ANDROID_PACKAGE_NAME,
            },
            iosInfo: {
              iosBundleId: process.env.NEXT_PUBLIC_IOS_BUNDLE_ID,
            },
            navigationInfo: {
              enableForcedRedirect: true,
            },
          },
          suffix: {
            option: 'SHORT',
          },
        }),
      }
    );

    const data = await response.json();
    return data.shortLink;
  } catch (error) {
    console.error('Error creating dynamic link:', error);
    return null;
  }
}

export function handleDynamicLink(url: string) {
  // Extract the path from the dynamic link
  const path = new URL(url).pathname;
  
  // Handle the navigation based on the path
  switch (path) {
    case '/projects':
    case '/about':
    case '/contact':
      window.location.href = path;
      break;
    default:
      // Handle unknown paths or redirect to home
      window.location.href = '/';
  }
} 
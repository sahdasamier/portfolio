import { FirebaseDynamicLinks } from 'firebase-dynamic-links';

const dynamicLinks = new FirebaseDynamicLinks({
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || '',
  domainUriPrefix: process.env.NEXT_PUBLIC_APP_URL || '',
});

export async function createProjectLink(projectId: string): Promise<string> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL;
    if (!baseUrl) {
      throw new Error('NEXT_PUBLIC_APP_URL is not defined');
    }
    
    // Create a dynamic link for the project
    const link = await dynamicLinks.createLink({
      link: `${baseUrl}/projects/${projectId}`,
      domainUriPrefix: process.env.NEXT_PUBLIC_APP_URL || '',
      androidInfo: {
        androidPackageName: process.env.NEXT_PUBLIC_ANDROID_PACKAGE_NAME || '',
      },
      iosInfo: {
        iosBundleId: process.env.NEXT_PUBLIC_IOS_BUNDLE_ID || '',
      },
      navigationInfo: {
        enableForcedRedirect: true,
      },
    });
    
    return link;
  } catch (error) {
    console.error('Error creating project link:', error);
    return `/projects/${projectId}`;
  }
}

export async function handleDynamicLink(url: string): Promise<string | null> {
  try {
    const projectIdMatch = url.match(/\/projects\/([^\/]+)/);
    if (projectIdMatch) {
      return projectIdMatch[1].replace(/\.html$/, '');
    }
    return null;
  } catch (error) {
    console.error('Error handling project link:', error);
    return null;
  }
} 
import { FirebaseDynamicLinks } from 'firebase-dynamic-links';

const dynamicLinks = new FirebaseDynamicLinks(process.env.NEXT_PUBLIC_FIREBASE_API_KEY || '');

export async function createProjectLink(projectId: string): Promise<string> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || '';
    if (!baseUrl) {
      throw new Error('APP_URL environment variable is not set');
    }

    // Create a dynamic link for the project
    const response = await dynamicLinks.createLink({
      dynamicLinkInfo: {
        domainUriPrefix: process.env.NEXT_PUBLIC_APP_URL || '',
        link: `${baseUrl}/projects/${projectId}`,
        androidInfo: {
          androidPackageName: process.env.NEXT_PUBLIC_ANDROID_PACKAGE_NAME || '',
        },
        iosInfo: {
          iosBundleId: process.env.NEXT_PUBLIC_IOS_BUNDLE_ID || '',
        },
      },
    });

    return response.shortLink || `${baseUrl}/projects/${projectId}`;
  } catch (error) {
    console.error('Error creating dynamic link:', error);
    return `${process.env.NEXT_PUBLIC_APP_URL}/projects/${projectId}`;
  }
}

export default dynamicLinks;

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
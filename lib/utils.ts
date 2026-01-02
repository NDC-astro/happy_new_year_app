export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export async function shareContent(title: string, text: string) {
  if (navigator.share) {
    try {
      await navigator.share({
        title,
        text,
      });
      return { success: true, method: 'native' };
    } catch (error) {
      if ((error as Error).name !== 'AbortError') {
        console.error('Error sharing:', error);
      }
      return { success: false, method: 'native' };
    }
  }
  return { success: false, method: 'none' };
}

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error('Failed to copy:', error);
    return false;
  }
}
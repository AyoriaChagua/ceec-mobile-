// extractDriveFileId.ts
export const extractDriveFileId = (url: string): string | null => {
    const match = url.match(/\/file\/d\/(.*?)\/(?:view|edit)/);
    return match ? match[1] : null;
  };
  
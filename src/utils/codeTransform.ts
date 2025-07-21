// Transform static imports to dynamic imports or handle special cases
export const transformImports = (code: string): string => {
  let transformedCode = code;

  // Remove ALL import statements for simplicity
  // This matches any line starting with 'import' and ending with a semicolon or newline
  transformedCode = transformedCode.replace(
    /^\s*import\s+.*?(?:from\s+['"][^'"]+['"])?[;\s]*$/gm,
    ''
  );

  // Also remove any multiline imports (imports that span multiple lines)
  transformedCode = transformedCode.replace(
    /^\s*import\s+[\s\S]*?from\s+['"][^'"]+['"]\s*;?\s*$/gm,
    ''
  );

  // Clean up any extra newlines that might be left after removing imports
  transformedCode = transformedCode.replace(/^\s*\n/gm, '');

  return transformedCode;
};

// Helper function to safely stringify objects with circular references
export const safeStringify = (obj: unknown, indent = 2): string => {
  const seen = new WeakSet();
  return JSON.stringify(
    obj,
    (_key, value) => {
      if (typeof value === 'object' && value !== null) {
        if (seen.has(value)) {
          return '[Circular]';
        }
        seen.add(value);
      }
      return value;
    },
    indent
  );
};

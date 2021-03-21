declare module 'package-json-parser' {
  import { PackageJson } from 'type-fest';

  export function version(packageJsonPath?: string): string | undefined;
  export function json(packageJsonPath?: string): PackageJson;
}
import * as QuillTypes from 'quill';
import { ModuleOptions } from './module-options';
export interface ModuleType {
    new (quill: QuillTypes.Quill, options: ModuleOptions): any;
}
export default function getPlaceholderModule(Quill: QuillTypes.Quill, options?: {
    className?: string;
}): ModuleType;

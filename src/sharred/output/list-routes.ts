import { Router } from 'express';
// @ts-ignore
import expressListRoutes from 'express-list-routes';

export function listRoutes(router: Router, prefix: string): void {
    expressListRoutes(router, { prefix });
}
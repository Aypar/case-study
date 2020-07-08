import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private prefix = 'storage_';

  public setToken(token: string) {
    this.set('token', token);
  }

  public getToken(): string {
    return this.get('token');
  }

  public removeToken(): void {
    this.remove('token');
  }

  public set(key: string, value: any) {
    localStorage.setItem(this.prefix + key, JSON.stringify(value));
  }

  public get(key: string): any {
    const value = localStorage.getItem(this.prefix + key);
    if (!value) {
      return null;
    }
    return JSON.parse(value);
  }

  public remove(key): void {
    localStorage.removeItem(this.prefix + key);
  }
}

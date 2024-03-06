import { Routes } from '@angular/router';
import { VideoComponent } from './components/video/video.component';
import { MessengerComponent } from './components/messenger/messenger.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'messenger'
    },
    {
        path: 'messenger',
        component: MessengerComponent
    },
    {
        path: 'video',
        component: VideoComponent
    },
];

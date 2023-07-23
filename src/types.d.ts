export type TaskModelType = {
    title: string;
    description: string;
    status: 'Por hacer' | 'En progreso' | 'Hecho';
    enable: boolean;
    date: Date;
}
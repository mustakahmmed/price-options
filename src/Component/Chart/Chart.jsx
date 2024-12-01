import { LineChart, Line, XAxis, YAxis } from 'recharts';

const Chart = () => {
    const studentData = [
        { id: 1, math: 85, physics: 90 },
        { id: 2, math: 78, physics: 88 },
        { id: 3, math: 92, physics: 95 },
        { id: 4, math: 70, physics: 75 },
        { id: 5, math: 88, physics: 82 },
        { id: 6, math: 65, physics: 72 },
        { id: 7, math: 95, physics: 98 },
        { id: 8, math: 80, physics: 85 },
        { id: 9, math: 73, physics: 78 },
        { id: 10, math: 60, physics: 65 }
      ];
      
    return (
        <div>
            <LineChart width={800} height={400} data={studentData}>
                <XAxis dataKey="id"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="physics" type="monotoneX" stroke='red' ></Line>
                <Line dataKey="math" type="monotoneX" stroke='green'></Line>

            </LineChart>
        </div>
    );
};

export default Chart;
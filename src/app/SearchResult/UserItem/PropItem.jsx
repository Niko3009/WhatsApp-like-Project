export default ({ prop, value }) => {
    const isValueLink = !!(String(value).indexOf('http') + 1)
    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        <p>{prop}</p>
                    </td>
                    <td>
                        <p>
                            {isValueLink ? <a href={value}>{value}</a> : value}
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

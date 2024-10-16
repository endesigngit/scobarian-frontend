import { clsx } from "clsx"
import styles from "./SizeTable.module.css"

export default function SizeTable() {
  return (
    <div className={styles.size_table}>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td></td>
            <th>Обхват груди, см</th>
            <th>Обхват талии, см</th>
            <th>объем бедер, см</th>
          </tr>
          <tr className={styles.row_P}>
            <td>XS</td>
            <td>84-88</td>
            <td>63-67</td>
            <td>90-94</td>
          </tr>
          <tr>
            <td>S</td>
            <td>88-92</td>
            <td>67-71</td>
            <td>94-98</td>
          </tr>
          <tr>
            <td>M</td>
            <td>92-96</td>
            <td>71-75</td>
            <td>98-102</td>
          </tr>
          <tr>
            <td>L</td>
            <td>96-100</td>
            <td>75-79</td>
            <td>102-106</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
